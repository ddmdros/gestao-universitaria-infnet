# UC03 - Gerenciar acervo (abstrato)

**Ator principal:** administrador

## Resumo

O administrador realiza operações de cadastro, atualização e remoção em livros e exemplares no sistema, e as operações são refletidas para membros e administradores.

## Pré-condições

1. Administrador autenticado (UC02, RN11)

## Especializações

- [UC03.1 - Cadastrar livro](UC03.1-cadastrar-livro.md)
- [UC03.2 - Cadastrar exemplar](UC03.2-cadastrar-exemplar.md)
- [UC03.3 - Atualizar livro](UC03.3-atualizar-livro.md)
- [UC03.4 - Atualizar exemplar](UC03.4-atualizar-exemplar.md)
- [UC03.5 - Remover livro](UC03.5-remover-livro.md)
- [UC03.6 - Remover exemplar](UC03.6-remover-exemplar.md)

## Regras e requisitos

### Comuns a todas as especializações

| Referência | Descrição |
|---|---|
| RN11 | Somente o administrador pode cadastrar ou alterar os registros do acervo |
| D04 | Operações do acervo tratadas de forma granular (cadastrar, atualizar, remover) |
| E01, E02 | Atributos de livro e exemplar |
| P15 | Atributo identificador de livro e exemplar (pendente) |

### Por especialização

| Referência | Descrição | Especializações |
|---|---|---|
| RF01 | Cadastro de livros | UC03.1 |
| RF02 | Cadastro de exemplares | UC03.2 |
| RF06 | Atualização de livros e exemplares, inclusive estado de conservação | UC03.3, UC03.4 |
| RF08 | Remoção de livros e exemplares | UC03.5, UC03.6 |
| P14 | Campos obrigatórios de livro e exemplar (pendente) | UC03.1 a UC03.4 |
| D08 | Remoção em cascata (livro) ou um a um (exemplar) | UC03.5, UC03.6 |