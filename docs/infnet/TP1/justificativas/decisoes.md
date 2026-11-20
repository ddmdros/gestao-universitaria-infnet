# Decisões

Mantém um registro das decisões e fundamentações baseadas em suposições.

| ID | Problema | Decisão adotada |
|---|---|---|
| D01  | A data de retirada entra na conta dos 14 dias corridos para a devolução? Origem: RF19 | A data de retirada é o dia 0, e não contabiliza para os 14 dias corridos para a devolução. |
| D02 | `RN06`: a reserva fica disponível quando TODOS os exemplares forem emprestados? Quando um livro tem 3 exemplares e 2 foram emprestados, pode fazer reserva? | Decidi que a reserva só pode acontecer quando não houver nenhum exemplar disponível. Esta decisão é mais estrita que a RN06 literal |
| D03 | A `RN11` usa "Bibliotecário/Administrador", e a `RN10` usa só "bibliotecário". Não há regras de permissões diferentes entre os dois. | Uniformizar como Administrador |
| D04 | o `RN11` diz que Administrador pode "cadastrar ou alterar" os registros do acervo e dos membros. O `A02` é mais granular, e cita cadastrar, atualizar, remover e consultar. Usei a especificação | Ser granular nos requisitos funcionais|
| D05 | O membro solicita o empréstimo, o administrador processa e registra, ou o membro faz tudo sozinho, como em um autoatendimento? | Decidi que o sistema emulará uma biblioteca física, e que, por isso, o administrador é o único que processa empréstimos e devoluções. |
| D06 | RN09 diz que o sistema calcula e vincula a multa, mas RN11 diz que o administrador gerencia a multa. | Decisão: o sistema cria a multa, e o administrador apenas consulta e marca como paga |
| D07 | É preciso decidir quais documentos comprovam vínculo com a universidade para a criação de credenciais válidas (UC01) | RN13 delimita os documentos necessários para comprovação de vínculo com a universidade. Pede-se que os documentos sejam recentes para comprovar que o membro ou admnistrador possui vínculo ativo com a universidade. |
| D08 | Ao remover um livro, os exemplares associados devem ser removidos um a um, ou o administrador pode remover em cascata? | UC03.5 (remover livro) permite remover em cascata: o administrador pode remover todos os exemplares associados a um livro ao remover um livro correspondente. UC03.6: o administrador pode remover um a um. Justificativa: o administrador pode precisar de agilidade na remoção. |
| D09 | RNF01 precisa de um valor testável para medir o desempenho do sistema: quantos usuários podem usar o sistema ao mesmo tempo em horário de pico? | Com base nas características do sistema (sistema de biblioteca universitária), estima-se que até 50 pessoas possam usar o sistema ao mesmo tempo em horário de pico. | 