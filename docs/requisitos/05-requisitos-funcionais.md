# Requisitos funcionais (RF)

## Acervo (cadastro antes do uso)

| ID   | Requisito funcional                                                              | Origem         |
| ---  | ---                                                                              | ---            |
| RF01 | O sistema deve permitir que somente o administrador cadastre livros no acervo | RN11, A02, S04 |
| RF02 | O sistema deve permitir que somente o administrador cadastre exemplares no acervo | RN11, A02, S04 |
| RF03 | O sistema deve permitir que membros e administradores consultem livros do acervo. | RN11, A01, A02 |
| RF04 | O sistema deve permitir que membros e administradores consultem exemplares do acervo. | RN11, A01, A02 |
| RF05 | O sistema deve permitir que, dado um livro, os membros consultem a disponibilidade de exemplares | A01 |
| RF06 | O sistema deve permitir que somente o administrador atualize livros e exemplares do acervo | RN11, A02, S04 |
| RF07 | O sistema deve permitir que o administrador regularize a condição de exemplares danificados ou indisponíveis para uso | RN10, RF16 |
| RF08 | O sistema deve permitir que somente o administrador remova livros e exemplares do acervo | RN11, A02, S04 |

## Membros

| ID   | Requisito funcional                                                              | Origem         |
| ---  | ---                                                                              | ---            |
| RF09 | O sistema deve permitir que somente o administrador cadastre registros dos membros | RN11, A02, S04 |
| RF10 | O sistema deve permitir que o administrador consulte registros dos membros | RN11, A02, S04 |
| RF11 | O sistema deve permitir que somente o administrador atualize registros dos membros | RN11, A02, S04 |
| RF12 | O sistema deve permitir que somente o administrador remova registros dos membros | RN11, S04, A02 |
| RF13 | O sistema deve impedir que membros sem cadastro válido realizem empréstimos ou reservas | RN12 |

## Empréstimo e devolução

| ID   | Requisito funcional                                                              | Origem         |
| ---  | ---                                                                              | ---            |
| RF14 | O sistema deve permitir que os membros solicitem empréstimos | A01 |
| RF15 | O sistema deve recusar o empréstimo quando o membro tiver 3 empréstimos simultâneos ativos. | RN03 |
| RF16 | O sistema deve recusar o empréstimo de exemplar em condição inadequada | RN04 |
| RF17 | O sistema deve recusar o empréstimo de um exemplar emprestado | RN05 |
| RF18 | O sistema deve permitir que somente o administrador processe empréstimos | RN11, A02, S05 |
| RF19 | O sistema deve calcular o prazo de 14 dias corridos de devolução automaticamente quando um empréstimo é realizado. A data de retirada é o dia 0, e não contabiliza para os 14 dias corridos do prazo de devolução. | RN01, S01 |
| RF20 | O sistema deve permitir que os membros solicitem devoluções | A01 |
| RF21 | O sistema deve permitir que somente o administrador processe devoluções | RN11, A02, S05 |
| RF22 | O sistema deve encerrar o empréstimo ativo correspondente quando uma devolução for realizada | RN08 |
| RF23 | O sistema deve registrar a data efetiva de devolução automaticamente quando uma devolução for realizada | RN08 |

## Multa (consequência da devolução)

| ID | Requisito funcional | Origem |
|---|---|---|
| RF24 | O sistema deve calcular a multa automaticamente quando um exemplar é devolvido com atraso. | RN02, RF19 |
| RF25 | O sistema deve vincular a multa por atraso ao membro responsável pelo empréstimo | RN09, RF19 |
| RF26 | O sistema deve permitir que o administrador consulte multas de membros | RN11, A02, OQ01, OQ06|
| RF27 | O sistema deve permitir que o administrador marque uma multa como paga. | RN11, A02, OQ01| 

## Reserva
| ID | Requisito funcional | Origem |
|---|---|---|
| RF28 | O sistema deve permitir que um livro possa ser reservado somente quando pelo menos 1 exemplar estiver emprestado e não houver nenhum exemplar correspondente disponível. (ver `S02`) | RN06, S02 |
| RF29 | O sistema deve permitir que os membros e o administrador criem uma reserva. | RN11, A01, A02, OQ02 |
| RF30 | O sistema deve permitir que o administrador consulte uma fila de reserva. | RN11, A02, OQ02 |
| RF31 | O sistema deve permitir que o administrador cancele um registro de uma fila de reserva. | RN11, A02, OQ02 |




