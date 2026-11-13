# Regras de Negócio (RN)

As regras de negócio de RN01-RN12 foram fornecidas pelo enunciado do TP1 e foram preservadas em sua integralidade, incluindo a ordem em que foram apresentadas. Aqui, apenas acrescentamos um ID e as organizamos em módulos para facilitar sua identificação. As demais foram decisões tomadas pela equipe.

Fonte: [enunciado TP](../infnet/TP1/enunciado.md).


| ID | Descrição | Módulo |
|---|---|---|
| RN01 | O prazo padrão de cada empréstimo é de 14 dias corridos a partir da data de retirada. | Empréstimo e devolução |
| RN02 | A multa por atraso é calculada por dia corrido após o prazo de devolução, considerando apenas os dias de atraso até a devolução efetiva do exemplar. | Multa |
| RN03 | Cada membro pode ter, no máximo, 3 empréstimos simultâneos ativos. | Empréstimo e devolução |
| RN04 | Um exemplar somente pode ser emprestado se estiver disponível e em condições adequadas de uso. | Empréstimo e devolução |
| RN05 | Um exemplar não pode possuir mais de um empréstimo ativo simultaneamente. | Empréstimo e devolução | 
| RN06 | A reserva somente pode ser realizada para um livro que possua exemplares atualmente emprestados, não sendo permitida a reserva quando todos os exemplares estiverem disponíveis. | Reserva |
| RN07 | A reserva é vinculada ao livro, e não a um exemplar específico, pois pode haver vários exemplares do mesmo título no acervo.| Reserva |
| RN08 | A devolução deve encerrar o empréstimo ativo correspondente e registrar a data efetiva de devolução.| Empréstimo e devolução  |
| RN09 | Quando a devolução ocorrer após o prazo estabelecido, o sistema deverá calcular a multa proporcional aos dias corridos de atraso e vinculá-la ao membro responsável pelo empréstimo.| Multa |
| RN10 | Exemplares danificados ou indisponíveis para uso não podem ser emprestados até que sua condição seja regularizada pelo bibliotecário. | Acervo |
| RN11 | Somente o Bibliotecário/Administrador pode cadastrar ou alterar os registros do acervo e dos membros, processar operações administrativas e gerenciar multas. | Transversal (acesso do adm) |
| RN12 | Os membros devem possuir cadastro válido para realizar empréstimos e reservas.| Membros |
| RN13 | Documentos válidos para criação de credenciais (D07): <br/>Estudante: atestado de matrícula/histórico escolar recente (últimos 3 meses)<br/>Professor: contracheque recente (últimos 3 meses)<br/>Funcionário: contracheque recente (últimos 3 meses)<br/>Bibliotecário e administrador de credenciais: contracheque recente (últimos 3 meses)| Credenciais |
