// Hook PreToolUse: impede o agente de criar commits (bash e PowerShell).
// Exit 2 = bloqueia a chamada e envia a mensagem de stderr ao agente.
import { readFileSync } from "node:fs";

const input = JSON.parse(readFileSync(0, "utf8"));
const comando = input.tool_input?.command || "";

// Captura `git commit`, `git -c x=y commit`, `git -C caminho commit`, e também
// verbos que criam commits: commit-tree, cherry-pick, revert, am.
const CRIA_COMMIT = /\bgit\b(?:\s+(?:-c\s+\S+|-C\s+\S+|--?[\w-]+(?:=\S+)?))*\s+(?:commit(?:-tree)?|cherry-pick|revert|am)(?![\w-])/i;

if (["Bash", "PowerShell"].includes(input.tool_name) && CRIA_COMMIT.test(comando)) {
  process.stderr.write(
    "Bloqueado pelo hook: agentes não podem criar commits neste projeto. Deixe os commits para o aluno.\n",
  );
  process.exit(2);
}
process.exit(0);
