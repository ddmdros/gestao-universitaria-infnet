# UC02 - Realizar autenticação

**Ator principal:** membro ou administrador

## Resumo

O membro ou administrador insere suas credenciais no sistema, que faz a validação.

## Pré-condições

1. O membro ou administrador solicitante possui credenciais válidas (ver UC01).

## Pós-condições

1. O membro ou administrador agora tem acesso ao sistema.
2. Se solicitado, o membro ou administrador solicitante pode receber uma notificação confirmando a operação (ver UC06).

## Cenário principal

1. O membro ou administrador solicitante insere suas credenciais de acesso no sistema
2. O sistema valida a autenticação do membro ou administrador no sistema

## Fluxos alternativos

- 1a. O membro ou administrador não lembra das suas credenciais ou parte dela (usuário ou senha).
  - 1a1. O membro ou administrador pode solicitar a recuperação das suas credenciais através do sistema
    - 1a1.1. O membro ou administrador encerra o UC02 e passa para o UC07
- 2a. O membro ou administrador forneceu credenciais inválidas
  - 2a1. O membro ou administrador pode tentar inserir suas credenciais novamente (o membro ou administrador pode errar até 5 vezes)
    - 2a1.1. Se exceder o limite de tentativas, o sistema bloqueia a conta, e o membro ou administrador encerra o UC02 e deve iniciar o UC08 para recuperar a conta
    - 2a1.2. Se acertar as credenciais em uma das tentativas, a contagem das tentativas zera, e o membro ou administrador conclui o passo 2
  - 2a2. O membro ou administrador pode solicitar a recuperação das suas credenciais através do sistema
    - 2a2.1. O membro ou administrador encerra o UC02 e passa para o UC07
- 2b. O membro ou administrador está há mais de seis meses afastado da universidade (RF38)
  - 2b1. O membro ou administrador deve enviar os documentos comprobatórios para o administrador de credenciais para atualizar suas credenciais
    - 2b1.1. O membro ou administrador encerra o UC02 e passa para o UC01