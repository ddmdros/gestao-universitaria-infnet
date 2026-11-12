# Suposições

Mantém um registro das decisões e fundamentações baseadas em suposições.

| ID | Lacuna no enunciado | Suposição adotada |
|---|---|---|
| S01  | A data de retirada entra na conta dos 14 dias corridos para a devolução? Origem: RF19 | A data de retirada é o dia 0, e não contabiliza para os 14 dias corridos para a devolução. |
| S02 | `RN06`: a reserva fica disponível quando TODOS os exemplares forem emprestados? Quando um livro tem 3 exemplares e 2 foram emprestados, pode fazer reserva? | Decidi que a reserva só pode acontecer quando não houver nenhum exemplar não danificado disponível. Esta decisão é mais estrita que a RN06 literal |
| S03 | A `RN11` usa "Bibliotecário/Administrador", e a `RN10` usa só "bibliotecário". Não há regras de permissões diferentes entre os dois. | Uniformizar como Administrador |
| S04 | o `RN11` diz que Administrador pode "cadastrar ou alterar" os registros do acervo e dos membros. O `A02` é mais granular, e cita cadastrar, atualizar, remover e consultar. Usei a especificação | Ser granular nos requisitos funcionais|
| S05 | O membro solicita o empréstimo, o administrador processa e registra, ou o membro faz tudo sozinho, como em um autoatendimento? | Decidi que o sistema emulará uma biblioteca física, e que, por isso, o administrador é o único que processa empréstimos e devoluções. |
| S06 | RN09 diz que o sistema calcula e vincula a multa, mas RN11 diz que o administrador gerencia a multa. | Decisão: o sistema cria a multa, e o administrador apenas consulta e marca como paga |
