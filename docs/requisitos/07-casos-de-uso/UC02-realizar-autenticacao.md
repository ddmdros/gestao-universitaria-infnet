# UC02 - Realizar autenticação

Ator principal: Sistema

Ator secundário: Membro ou Administrador

## Resumo

O Membro ou Administrador insere suas credenciais no sistema, que faz a validação.

## Pré-condições

1. O membro ou administrador solicitante possui credenciais válidas (ver UC01).

## Pós-condições

1. O membro ou administrador agora tem acesso ao sistema.
2. Se solicitado, o membro ou admnistrador solicitante pode receber uma notificação confirmando a operação (ver UC06).

## Cenário principal

1. O membro ou administrador solicitante insere suas credenciais de acesso no sistema
2. O sistema valida a autenticação do membro ou administrador no sistema

## Extensões

2.1 O membro ou administrador não lembra das suas credenciais ou parte dela (usuário ou senha).
    2.1.1 O membro ou administrador deve solicitar a recuperação de senha através do sistema

2.2 O membro ou administrador está há mais de seis meses afastado da universidade (RF38)
    2.2.1 O membro ou administrador deve enviar os documentos comprobatórios para o administradorDeCredenciais para atualizar suas credenciais (UC01)