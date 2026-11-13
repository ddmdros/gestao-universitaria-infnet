# UC01 - Criar credenciais válidas

**Ator principal:** membro ou administrador

**Ator secundário:** administrador de credenciais

## Resumo

O administrador de credenciais cria credenciais válidas para o administrador ou membro solicitante

## Pré-condições

1. Um administrador do tipo administrador de credenciais válido
2. Um membro ou administrador solicitante

## Pós-condições

1. O membro ou administrador solicitante agora possui credenciais válidas
2. Se solicitado, o solicitante pode receber notificações (UC06)

## Cenário principal

1. O membro ou administrador envia uma solicitação de criação de credenciais para o administrador de credenciais com os documentos que comprovam o seu vínculo com a universidade (RN13)
2. O administrador de credenciais valida e aprova os documentos
3. O administrador de credenciais cria as credenciais do solicitante
4. Se solicitado, o solicitante pode receber uma notificação comprovando a operação (UC06)

## Fluxos alternativos

- 2a. O administrador de credenciais recusa o(s) documento(s) fornecido(s)
  - 2a1. O membro ou administrador deve buscar os documentos válidos e só então voltar ao passo 1