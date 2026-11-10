# Gestão de Biblioteca Universitária: instruções para agentes

Repositório de entrega do aluno para **Projeto de Bloco: Desenvolvimento Back-End** (Infnet, ciclo 3.1, disciplina `pb`). É só do aluno: o agente lê, explica e revisa, e **não grava nada aqui**.

Regras de base: `../ciclo-3.1/AGENTS.md` (comuns ao ciclo) e `../ciclo-3.1/pb_back_end/AGENTS.md` (da disciplina). Onde divergirem, vale este arquivo. Em especial, a regra de commit proativo do ciclo **não vale aqui**.

## O que os hooks bloqueiam neste repositório

- Criar, editar, mover ou apagar qualquer arquivo, inclusive `.claude/`, `.agent/`, `.git/` e este `AGENTS.md`.
- Criar commits, em qualquer repositório, a partir de uma sessão aberta aqui (`commit`, `cherry-pick`, `revert`, `am`), e comandos git que alteram o repositório (`add`, `push`, `pull`, `checkout`, `reset` e outros).
- Editar diretamente os arquivos do ciclo que só scripts gravam, e escrever em `../ciclo-3.1/<disc>/tps/` (hooks do próprio ciclo).

Código e texto vão para o chat. O aluno aplica e versiona.

## Início da sessão

1. Leia `../ciclo-3.1/pb_back_end/contexto.md` (mapa da disciplina) e `../ciclo-3.1/pb_back_end/progresso.md`. Se houver entrega em até 7 dias, avise em uma linha.
2. Veja o estado do repositório, só lendo: `git log --oneline -15` e `git status --short`.
3. Veja as tarefas: `node C:/_dev/infnet/ciclo-3.1/_harness/scripts/tarefa.mjs listar --disc pb`.

## Registrar no ciclo (fora deste repositório)

Tudo que o agente detecta fica em `../ciclo-3.1/`, gravado **só pelos scripts** e **sempre com caminho absoluto** (com caminho relativo, o hook pode ler o comando como escrita aqui):

- **Dúvida ou erro do aluno**, ao fim de cada explicação ou erro apontado (fluxo `../ciclo-3.1/_harness/fluxos/registrar-duvida.md`):
  `node C:/_dev/infnet/ciclo-3.1/_harness/scripts/duvida.mjs add pb --origem tp:tp1:<item> --tipo duvida|erro|ferramenta --temas area/assunto --resumo "..." --resolucao "..."`
  Antes, rode `duvida.mjs temas pb` para reaproveitar os temas que já existem. Depois, avise em uma linha: "Registrei pb-00NN (tema)."
- **Progresso**: assuma a tarefa antes de trabalhar e registre uma nota a cada marco:
  `node C:/_dev/infnet/ciclo-3.1/_harness/scripts/tarefa.mjs assumir|nota|soltar|concluir <id> --agente "claude-code:gestao" --nota "..."`
  Pendência nova: `tarefa.mjs add --disc pb --titulo "..." [--precisa-usuario]`.
- **O que você observar no repositório** (relatório vazio, requisito commitado, entrega montada): registre como nota na tarefa do TP, citando o commit ou o arquivo.

Nas notas, não escreva comandos git literais: o hook de commit também confere o texto.

Os registros ficam no disco do ciclo. O commit deles acontece na próxima sessão aberta em `ciclo-3.1`, ou pelo aluno.

## Trabalho avaliado

- Siga o nível de IA do enunciado. TP1 é **sinal amarelo**: IA só como par de programação no programa standalone e para explicar código. Não escreva requisitos, casos de uso, diagramas, specs nem texto do relatório.
- O enunciado de referência do agente fica em `../ciclo-3.1/pb_back_end/enunciados/<tp>/` (`enunciado.md`, `requisitos.json`). `docs/` deste repositório é a cópia do aluno. As transcrições não são literais: na dúvida, vale a página do infnet.online.
- Lembre o aluno de citar no relatório as ferramentas de IA usadas, como pede o `README.md`.
- Dados de teste são sempre sintéticos. Nunca use dados pessoais ou financeiros reais.
