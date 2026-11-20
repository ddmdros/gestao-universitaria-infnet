// Hook PreToolUse: impede o agente de escrever no projeto, com uma exceção.
// Exceção: Edit/MultiEdit em .md de docs/casos-de-uso, docs/requisitos e
// docs/infnet/TP1/justificativas, desde que a edição seja só mecânica:
//   - formatação: espaços, recuo, linhas em branco, negrito, marcador de lista,
//     dois-pontos no fim de título, hífen;
//   - rótulos de passo/extensão no início da linha (5. -> 6., 2.a.1 -> 2a1.);
//   - ponteiros: IDs de requisito/decisão/pendência/UC (RF01 -> RF02,
//     UC3.3 -> UC03.3, "UC 02" -> UC02) e destinos de link [texto](destino).
// Qualquer outra mudança de texto é bloqueada. Write (arquivo novo ou inteiro),
// Bash e PowerShell continuam bloqueados.
// Recebe o JSON da ferramenta pela entrada padrão. Exit 2 = bloqueia a chamada
// e envia a mensagem de stderr de volta ao agente.
import { readFileSync } from "node:fs";
import { isAbsolute, relative, resolve, sep } from "node:path";

const input = JSON.parse(readFileSync(0, "utf8"));
const projectDir = resolve(process.env.CLAUDE_PROJECT_DIR || input.cwd || process.cwd());

const MENSAGEM =
  "Bloqueado pelo hook: agentes não podem escrever em nenhum lugar de gestao-universitaria-infnet. Faça a alteração manualmente.";
const MENSAGEM_CONTEUDO =
  "Bloqueado pelo hook: a edição muda texto, não só formatação ou ponteiros (IDs e links). Mande o trecho no chat para o aluno aplicar.";

const PASTAS_EDITAVEIS = ["docs/casos-de-uso", "docs/requisitos", "docs/infnet/TP1/justificativas"];

function caminhoRelativo(caminho) {
  const alvo = resolve(input.cwd || projectDir, caminho);
  return relative(projectDir, alvo);
}

function dentroDoProjeto(caminho) {
  const rel = caminhoRelativo(caminho);
  return rel === "" || (!rel.startsWith("..") && !isAbsolute(rel));
}

function editavel(caminho) {
  const rel = caminhoRelativo(caminho).split(sep).join("/");
  return rel.endsWith(".md") && PASTAS_EDITAVEIS.some((p) => rel.startsWith(p + "/"));
}

// Reduz o texto ao que importa: some com formatação, rótulos e ponteiros.
const ID = /\b(?:RNF|RF|RN|UC|OQ|[DPEAS])\s?\d+(?:\.\d+)*\b/g;
const ROTULO = /^[ \t]*(?:[-*+][ \t]*)?\d+(?:\.?[a-z])?(?:\.?\d+)*\.?(?=[ \t])/gm;
function normalizar(texto) {
  return String(texto ?? "")
    .replace(/\r/g, "")
    .replace(ROTULO, "#N")
    .replace(/^(#+.*?):[ \t]*$/gm, "$1")
    .replace(/\]\([^)]*\)/g, "]()")
    .replace(ID, "#ID")
    // listas de IDs ("RF01, D08", "UC03.1 a UC03.4") contam como um ponteiro só
    .replace(/#ID(?:[ \t]*(?:,|;|\be\b|\ba\b)[ \t]*#ID)+/g, "#ID")
    // citação entre parênteses só com IDs pode ser acrescentada ou retirada
    .replace(/[ \t]*\((?:ver[ \t]+)?#ID\)/g, "")
    .replace(/[*\-]/g, "")
    .replace(/\s+/g, "");
}

function edicaoMecanica(edits) {
  return edits.every((e) => normalizar(e.old_string) === normalizar(e.new_string));
}

let bloquear = false;
let mensagem = MENSAGEM;

if (["Edit", "MultiEdit"].includes(input.tool_name)) {
  const alvo = input.tool_input?.file_path;
  if (alvo && dentroDoProjeto(alvo)) {
    const edits = input.tool_name === "Edit" ? [input.tool_input] : input.tool_input?.edits || [];
    if (!editavel(alvo)) bloquear = true;
    else if (!edicaoMecanica(edits)) {
      bloquear = true;
      mensagem = MENSAGEM_CONTEUDO;
    }
  }
} else if (["Write", "NotebookEdit"].includes(input.tool_name)) {
  const alvo = input.tool_input?.file_path || input.tool_input?.notebook_path;
  bloquear = Boolean(alvo) && dentroDoProjeto(alvo);
} else if (["Bash", "PowerShell"].includes(input.tool_name)) {
  bloquear = comandoEscreveNoProjeto(input.tool_input?.command || "");
}

// Operações que modificam arquivos (bash e PowerShell).
// `(?<!\d)>` ignora redirecionamentos de descritor como 2>&1.
function comandoEscreveNoProjeto(comando) {
  const OPERACOES_DE_ESCRITA = new RegExp(
    [
      String.raw`(?<!\d)>>?(?!&)`,
      String.raw`\btee\b`,
      String.raw`\bsed\b[^|;&]*\s-i`,
      String.raw`\bperl\b[^|;&]*\s-i`,
      String.raw`\b(rm|mv|cp|touch|mkdir|rmdir|truncate|dd|chmod|ln|npm|npx|dotnet|javac|jar)\b`,
      String.raw`\b(set-content|add-content|out-file|new-item|remove-item|move-item|copy-item|clear-content|rename-item|set-itemproperty)\b`,
      String.raw`\bgit\s+(checkout|restore|reset|clean|stash|apply|rm|mv|add|init|config|tag|branch|push)\b`,
    ].join("|"),
    "i",
  );
  if (!OPERACOES_DE_ESCRITA.test(comando)) return false;
  // Comandos cujos caminhos são todos absolutos e fora do projeto não alteram o repositório.
  const absolutos = comando.match(/(?:[A-Za-z]:[\\/]|\/[A-Za-z]\/|(?<![\w.])\/(?!\s))[^\s"'`;&|]+/g) || [];
  if (absolutos.length > 0 && absolutos.every((p) => !dentroDoProjeto(p.replace(/^\/([A-Za-z])\//, "$1:/")))) {
    return false;
  }
  return true;
}

if (bloquear) {
  process.stderr.write(mensagem + "\n");
  process.exit(2);
}
process.exit(0);
