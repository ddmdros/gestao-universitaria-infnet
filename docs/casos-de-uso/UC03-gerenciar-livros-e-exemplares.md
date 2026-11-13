# UC03 - Gerenciar livros e exemplares
Ator principal: Sistema
Ator secundário: Administrador

## Resumo:
O administrador cadastra livros e exemplares no sistema, que fica disponível para outros membros e administradores.

## Pré-condições:
1. Administrador autenticado

## Pós-condições

## Cenário principal
1. O administrador insere o ID e as informações do livro ou exemplar que deseja cadastrar no sistema
2. O sistema registra essas informações
3. O administrador confirma as inserções, que ficam disponíveis para os outros usuários

## Extensões
1.1 Alterar
    1.1.1 O administrador insere o ID e as informações do livro ou exemplar cujas informações ele deseja alterar  no sistema
1.2 Remover
    1.2.1 O administrador insere o ID e as informações do livro ou exemplar que deseja remover do sistema
    1.2.2 Antes de confirmar a exclusão dos dados, o sistema pergunta se o administrador tem certeza do que está fazendo
    2. Volta ao fluxo
1.3 Remover livro emprestado
    1.3.1 O sistema informa que o livro possui um ou mais exemplares emprestados
    1.3.2 O administrador deve aguardar até que todos os exemplares sejam devolvidos antes de poder executar a operação
1.4 Remover exemplar emprestado
    1.4.1 O sistema informa que o exemplar está emprestado
    1.4.1 O administrador deve aguardar até que o exemplar seja devolvido antes de poder executar a operação
