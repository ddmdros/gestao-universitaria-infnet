# TP1 — Especificação de Requisitos e Modelagem Inicial
**Projeto de Bloco: Desenvolvimento Back-End** · *Instituto Infnet*

> [!CAUTION]
> Transcrição feita por agente, **não literal**. Só a seção 1.3 (regras de negócio) foi conferida com o original (2026-11-04). Antes de afirmar que o aluno errou algo "do enunciado", confira na página do infnet.online.

---

> [!NOTE]
> **Prazo de Entrega:** Segunda-feira, 9 de novembro de 2026, às 23:59  
> **Status:** Nenhuma tentativa (Não avaliado)

---

> [!WARNING]
> ### Uso de IAs: Sinal Amarelo 🟡
> Neste trabalho, é permitido o uso de ferramentas baseadas em IA exclusivamente para:
> - Apoio na elaboração do programa standalone inicial;
> - Utilização da IA como par de programação (revisar sintaxe, tirar dúvidas e explicar o código produzido).
>
> **Atenção:**
> - Todas as fontes e ferramentas utilizadas devem ser devidamente citadas.
> - O uso incompatível com essas diretrizes será considerado má conduta acadêmica, sujeito ao código disciplinar.
> - Os resultados gerados por IA podem conter vieses ou imprecisões; é responsabilidade do aluno validar toda informação e código aproveitado.

---

## 1. Contexto do Projeto: Sistema de Gestão de Biblioteca Universitária

O sistema gerencia o acervo físico de uma biblioteca universitária, seus exemplares, os membros da comunidade acadêmica (alunos, professores e funcionários) e as operações de consulta, empréstimo, devolução, reserva e cobrança de multas. O objetivo central é organizar a circulação do acervo e garantir o cumprimento das regras institucionais.

### 1.1 Entidades Principais

| Entidade | Descrição e Atributos |
| :--- | :--- |
| **Livro** | Obra catalogada no acervo. Contém `título`, `autor` e `ISBN`. |
| **Exemplar** | Cópia física vinculada a um Livro. Contém `código de patrimônio`, `estado de conservação` e `vínculo com o Livro`. |
| **Membro** | Usuário cadastrado na biblioteca. Contém `nome`, `matrícula` e `tipo` (*aluno*, *professor* ou *funcionário*). |
| **Empréstimo** | Registro de posse temporária de um exemplar. Contém `exemplar`, `membro`, `data de retirada`, `prazo de devolução` e `data efetiva de devolução`. |
| **Reserva** | Fila de espera vinculada à obra. Contém `livro`, `membro` e `data da reserva`. |
| **Multa** | Sanção financeira por atraso. Contém `membro`, `empréstimo relacionado`, `valor` e `situação de pagamento`. |

### 1.2 Papéis e Atores

- **Membro** (*Aluno, Professor ou Funcionário*): Consulta o acervo, verifica disponibilidade de títulos, solicita empréstimos/devoluções e realiza reservas.
- **Bibliotecário / Administrador**: Cadastra, consulta, atualiza e remove registros de acervo e membros; processa empréstimos e devoluções; gerencia filas de reserva; emite e controla o pagamento de multas.

### 1.3 Regras de Negócio (RN)

> [!CAUTION]
> **Texto literal conferido em 2026-11-04** contra a página do infnet.online (print do aluno). A versão anterior desta seção era uma paráfrase feita por agente, com títulos e IDs inventados e três regras com o sentido alterado (RN06, RN10, RN12). O original é uma lista **sem IDs nem títulos**; os IDs RN01–RN12 abaixo seguem a ordem da lista e são só para referência. O resto deste arquivo também é transcrição não conferida: na dúvida, vale a página original.

Regras de negócio:

- **RN01:** O prazo padrão de cada empréstimo é de 14 dias corridos a partir da data de retirada.
- **RN02:** A multa por atraso é calculada por dia corrido após o prazo de devolução, considerando apenas os dias de atraso até a devolução efetiva do exemplar.
- **RN03:** Cada membro pode ter, no máximo, 3 empréstimos simultâneos ativos.
- **RN04:** Um exemplar somente pode ser emprestado se estiver disponível e em condições adequadas de uso.
- **RN05:** Um exemplar não pode possuir mais de um empréstimo ativo simultaneamente.
- **RN06:** A reserva somente pode ser realizada para um livro que possua exemplares atualmente emprestados, não sendo permitida a reserva quando todos os exemplares estiverem disponíveis.
- **RN07:** A reserva é vinculada ao livro, e não a um exemplar específico, pois pode haver vários exemplares do mesmo título no acervo.
- **RN08:** A devolução deve encerrar o empréstimo ativo correspondente e registrar a data efetiva de devolução.
- **RN09:** Quando a devolução ocorrer após o prazo estabelecido, o sistema deverá calcular a multa proporcional aos dias corridos de atraso e vinculá-la ao membro responsável pelo empréstimo.
- **RN10:** Exemplares danificados ou indisponíveis para uso não podem ser emprestados até que sua condição seja regularizada pelo bibliotecário.
- **RN11:** Somente o Bibliotecário/Administrador pode cadastrar ou alterar os registros do acervo e dos membros, processar operações administrativas e gerenciar multas.
- **RN12:** Os membros devem possuir cadastro válido para realizar empréstimos e reservas.

Logo depois das regras, o original diz que esse é o domínio de todo o projeto, do TP1 à Apresentação Final, e descreve o bloco como começando por "um programa standalone orientado a objetos" que evolui até um serviço web com persistência, API e autenticação (Java/Spring Boot ou C#/ASP.NET Core). **Conferir** se a tarefa 4 do original fala mesmo em "sem classes de domínio" (seção 3 abaixo, ainda não conferida).

---

## 2. Visão Geral do Percurso no Bloco

Neste bloco, você desenvolverá o sistema do zero em etapas incrementais, partindo de um programa standalone simples até um serviço web completo com arquitetura em camadas, banco de dados relacional, API REST e autenticação.

- **Escolha de Trilha (permanente até a apresentação final):**
  - **Trilha Java:** JDK 21 (LTS), IntelliJ IDEA Community, ecossistema Spring Boot.
  - **Trilha C#:** .NET 10 SDK (LTS), Visual Studio Community, ecossistema ASP.NET Core.
- **Foco do TP1:** Análise e modelagem antes do código orientado a objetos. Levantamento de requisitos, modelagem formal de casos de uso em UML, configuração do ambiente e elaboração de um esqueleto de código simples com estruturas básicas da linguagem.

---

## 3. Tarefas do TP1

### 1. Levantamento de Requisitos
- Identificar as necessidades do sistema com base no domínio e regras de negócio.
- Separar com clareza:
  - **Requisitos Funcionais (RF):** o que o sistema realiza (numerados: `RF01`, `RF02`...).
  - **Requisitos Não Funcionais (RNF):** desempenho, confiabilidade, usabilidade, restrições tecnológicas (numerados: `RNF01`, `RNF02`...).
- Manter o documento estruturado como base de referência para todo o bloco.

### 2. Especificação de Casos de Uso em UML
- Identificar os atores formais (no mínimo 2 papéis distintos).
- Modelar pelo menos **3 cenários principais** em diagrama de Casos de Uso (UML).
- Descrever textualmente para cada caso de uso:
  - Ator(es) envolvido(s);
  - Pré-condições;
  - **Fluxo Principal** (caminho feliz);
  - Pelo menos um **Fluxo Alternativo / de Exceção** (ex.: falha de pré-condição, exemplar indisponível, atraso).

### 3. Configuração do Ambiente de Desenvolvimento
- Instalar e configurar o ambiente da trilha escolhida:
  - **Java:** JDK 21 (LTS) + IntelliJ IDEA Community Edition.
  - **C#:** .NET 10 SDK (LTS) + Visual Studio Community.
- Validar a compilação e execução de um programa inicial de teste no ambiente.

### 4. Programa Standalone Inicial
- Criar a estrutura inicial do projeto na linguagem escolhida.
- Implementar um programa básico utilizando **tipos primitivos, operadores e estruturas de controle de fluxo** (condicionais e laços), sem modelar classes de domínio complexas ou orientação a objetos avançada nesta etapa.
- Utilizar ferramentas de IA como par de programação (para revisão, dúvidas e explicações conceituais do código).

### 5. Justificativa de Escopo e Suposições
- Justificar a delimitação adotada no TP1 (o que foi incluído agora e o que foi postergado para os próximos TPs).
- Registrar as suposições e inferências adotadas sobre regras implícitas e casos de borda do domínio da biblioteca.

---

## 4. Instruções de Entrega

Deverão ser enviados no Moodle:

1. **Documento Principal (PDF):**
   - Levantamento de requisitos funcionais e não funcionais;
   - Diagrama e detalhamento dos casos de uso em notação UML;
   - Justificativa de escopo e suposições documentadas.
2. **Repositório no GitHub:**
   - `..`: documentação de requisitos, diagramas e justificativas.
   - `../../../src`: código-fonte do programa standalone inicial.
3. **Vídeo de Defesa (até 5 minutos):**
   - Demonstração da execução do programa;
   - Explicação das decisões de requisitos e modelagem dos casos de uso.
4. **Arquivo Compactado (ZIP):**
   - Nome padronizado: `nome_sobrenome_PB_TP1.ZIP`
   - Contendo todos os artefatos acima para arquivamento institucional.

> [!IMPORTANT]
> Todos os arquivos entregues devem conter sua identificação formal (Nome completo e código da disciplina).

---

## 5. Orientações para a Gravação do Vídeo

- **Ferramenta:** Gravação simultânea de tela e webcam (sugestões: [Loom](https://www.loom.com/) ou [OBS Studio](https://obsproject.com/)).
- **Webcam obrigatória:** Câmera ligada durante toda a apresentação, com boa iluminação e rosto centralizado.
- **Ambiente:** Local calmo, silencioso e focado.
- **Revisão:** Verifique a nitidez do áudio e da tela antes da submissão.
- **Duração máxima:** 5 minutos.

---

## 6. Rubrica de Avaliação (Checklist)

Utilize este checklist para conferir se todos os critérios da rubrica foram plenamente atendidos antes da submissão:

- [ ] **RF Claros:** Levantou requisitos funcionais numerados e descritos com clareza?
- [ ] **RNF Relevantes:** Levantou requisitos não funcionais pertinentes ao domínio especificado?
- [ ] **Identificação de Atores:** Identificou corretamente os atores do sistema no diagrama de casos de uso?
- [ ] **Casos de Uso Principais:** Modelou pelo menos 3 casos de uso principais na notação UML?
- [ ] **Fluxos dos Casos de Uso:** Descreveu o fluxo principal e ao menos um fluxo alternativo para cada caso de uso?
- [ ] **Ambiente Configurado:** Configurou corretamente o ambiente de desenvolvimento da trilha escolhida (IDE e SDK/runtime)?
- [ ] **Execução Validada:** Compilou e executou um programa simples no ambiente configurado?
- [ ] **Programa Standalone:** Implementou o programa standalone inicial com tipos primitivos, operadores e controle de fluxo?
- [ ] **Uso Consciente de IA:** Demonstrou o uso de IA como par de programação, explicando o código em vez de apenas apresentá-lo?
- [ ] **Justificativa de Escopo:** Justificou o escopo definido para o TP1, explicitando o que entrou e o que ficou de fora?
- [ ] **Registro de Suposições:** Registrou as suposições feitas ao interpretar a especificação?
- [ ] **Clareza Documental:** Documentou o processo com clareza suficiente para que terceiros compreendam as decisões tomadas?
