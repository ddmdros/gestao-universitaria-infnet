# Requisitos funcionais (RF)

## Acervo (cadastro antes do uso)

| ID   | Requisito funcional                                                              | Origem         |
| ---  | ---                                                                              | ---            |
| RF01 | O sistema deve permitir que somente o administrador cadastre livros no acervo | RN11, A02, D04 |
| RF02 | O sistema deve permitir que somente o administrador cadastre exemplares no acervo | RN11, A02, D04 |
| RF03 | O sistema deve permitir que membros e administradores consultem livros do acervo | RN11, A01, A02 |
| RF04 | O sistema deve permitir que membros e administradores consultem exemplares do acervo | RN11, A01, A02 |
| RF05 | O sistema deve permitir que, dado um livro, os membros consultem a disponibilidade de exemplares | A01 |
| RF06 | O sistema deve permitir que somente o administrador atualize os atributos de livros e exemplares,  inclusive o estado de conservação do exemplar. | RN11, A02, D04, RN10, RF16 |
| ~~RF07~~ | ~~O sistema deve permitir que somente o administrador atualize o estado de conservação de um exemplar~~ *(fundido no RF06)* | ~~RN10, RF16~~ |
| RF08 | O sistema deve permitir que somente o administrador remova livros e exemplares do acervo | RN11, A02, D04 | 

## Membros

| ID   | Requisito funcional                                                              | Origem         |
| ---  | ---                                                                              | ---            |
| RF09 | O sistema deve permitir que somente o administrador cadastre registros dos membros | RN11, A02, D04 |
| RF10 | O sistema deve permitir que o administrador consulte registros dos membros | RN11, A02, D04 |
| RF11 | O sistema deve permitir que somente o administrador atualize registros dos membros | RN11, A02, D04 |
| RF12 | O sistema deve permitir que somente o administrador remova registros dos membros | RN11, D04, A02 |
| RF13 | O sistema deve impedir que membros sem cadastro válido realizem empréstimos ou reservas | RN12 |

## Realizar um empréstimo

| ID   | Requisito funcional                                                              | Origem         |
| ---  | ---                                                                              | ---            |
| RF14 | O sistema deve permitir que os membros solicitem empréstimos | A01 |
| RF15 | O sistema deve recusar o empréstimo quando o membro tiver 3 empréstimos simultâneos ativos. | RN03 |
| RF16 | O sistema deve recusar o empréstimo de exemplar em condição inadequada | RN04 |
| RF17 | O sistema deve recusar o empréstimo de um exemplar emprestado | RN05 |
| RF18 | O sistema deve permitir que somente o administrador processe empréstimos | RN11, A02, D05 |
| RF19 | O sistema deve calcular o prazo de 14 dias corridos de devolução automaticamente quando um empréstimo é realizado. A data de retirada é o dia 0, e não contabiliza para os 14 dias corridos do prazo de devolução. | RN01, D01 |

## Processar devolução
| ID   | Requisito funcional                                                              | Origem         |
| ---  | ---                                                                              | ---            |
| RF20 | O sistema deve permitir que os membros solicitem devoluções | A01 |
| RF21 | O sistema deve permitir que somente o administrador processe devoluções | RN11, A02, D05 |
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
| RF28 | O sistema deve permitir que um livro possa ser reservado somente quando pelo menos 1 exemplar estiver emprestado e não houver nenhum exemplar correspondente disponível. (ver `D02`) | RN06, D02 |
| RF29 | O sistema deve permitir que os membros e o administrador criem uma reserva. | RN11, A01, A02, OQ02 |
| RF30 | O sistema deve permitir que o administrador consulte uma fila de reserva. | RN11, A02, OQ02 |
| RF31 | O sistema deve permitir que o administrador cancele um registro de uma fila de reserva. | RN11, A02, OQ02 |

## Verificação e login
| ID | Requisito funcional | Origem |
|---|---|---|
| RF32 | O administrador de credenciais deve ser capaz de criar e modificar credenciais para os membros e administradores (incluindo bibliotecarios e os próprios administradores de credenciais) | UC01 |
| RF34 | O sistema deve permitir que o membro e o administrador forneçam suas credenciais de acesso ao sistema | UC01 |
| RF35 | O sistema deve ser capaz de validar as credenciais de acesso de membros e administradores aos sistema  | UC01 |
| RF36 | O sistema deve fornecer métodos de recuperação de acesso de credenciais caso o membro ou administrador esqueça das suas credenciais | UC01 |
| RF37 | O sistema deve validar de forma automática se o vínculo do membro ou administrador com a universidade continua ativo | UC02 |
| RF38 | O sistema deve bloquear a autenticação de acesso do membro ou administrador que está há mais de seis meses afastado da universidade. | UC02 |
| RF39 | O sistema deve permitir que o membro ou administrador solicite recuperação das suas credenciais caso as esqueça | UC02 |
