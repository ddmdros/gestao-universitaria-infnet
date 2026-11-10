// Hook PreToolUse: impede o agente de escrever em qualquer lugar do projeto.
// Recebe o JSON da ferramenta pela entrada padrão. Exit 2 = bloqueia a chamada
// e envia a mensagem de stderr de volta ao agente.
import { readFileSync } from "node:fs";
import { isAbsolute, relative, resolve } from "node:path";

const input = JSON.parse(readFileSync(0, "utf8"));
const projectDir = resolve(process.env.CLAUDE_PROJECT_DIR || input.cwd || process.cwd());

const MENSAGEM =
  "Bloqueado pelo hook: agentes não podem escrever em nenhum lugar de gestao-universitaria-infnet. Faça a alteração manualmente.";

function dentroDoProjeto(caminho) {
  const alvo = resolve(input.cwd || projectDir, caminho);
  const rel = relative(projectDir, alvo);
  return rel === "" || (!rel.startsWith("..") && !isAbsolute(rel));
}

// Operações que modificam arquivos (bash e PowerShell).
// `(?<!\d)>` ignora redirecionamentos de descritor como 2>&1.
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

// Caminhos absolutos que apontam para fora do projeto (ex.: a pasta de scratchpad).
function referenciaSoForaDoProjeto(comando) {
  const absolutos = comando.match(/(?:[A-Za-z]:[\\/]|\/[A-Za-z]\/|(?<![\w.])\/(?!\s))[^\s"'`;&|]+/g) || [];
  if (absolutos.length === 0) return false;
  return absolutos.every((p) => {
    const normal = p.replace(/^\/([A-Za-z])\//, "$1:/");
    return !dentroDoProjeto(normal);
  });
}

function comandoEscreveNoProjeto(comando) {
  if (!OPERACOES_DE_ESCRITA.test(comando)) return false;
  // Comandos cujos caminhos são todos absolutos e fora do projeto não alteram o repositório.
  if (referenciaSoForaDoProjeto(comando)) return false;
  return true;
}

let bloquear = false;

if (["Write", "Edit", "MultiEdit", "NotebookEdit"].includes(input.tool_name)) {
  const alvo = input.tool_input?.file_path || input.tool_input?.notebook_path;
  bloquear = Boolean(alvo) && dentroDoProjeto(alvo);
} else if (["Bash", "PowerShell"].includes(input.tool_name)) {
  bloquear = comandoEscreveNoProjeto(input.tool_input?.command || "");
}

if (bloquear) {
  process.stderr.write(MENSAGEM + "\n");
  process.exit(2);
}
process.exit(0);
