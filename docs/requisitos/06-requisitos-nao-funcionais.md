# Requisitos não funcionais (RNF)

| ID | Requisito não funcional | Categoria | Justificativa |
| --- | --- | --- | --- |
| RNF01 | Com até 50 usuários simultâneos, uma solicitação de consulta, reserva ou empréstimo no sistema deve responder em até 0,5s em 95% das vezes | Desempenho | Essas são as operações básicas do sistema, e o sistema não deve demorar para realizá-las. O número de 50 usuários simultâneos é uma estimativa de quantas pessoas podem usar o sistema de uma biblioteca universitária em horário de pico (D09). |
| RNF02 | O sistema deve garantir que os dados de uma operação de reserva, empréstimo ou devolução concluída não sejam perdidos quando houver falha no sistema. | Confiabilidade | Se o programa cair, reiniciar ou falhar após uma operação, os registros não devem se perder, pois o membro ou administrador pode levar uma multa ou sofrer penalidades indevidas. |
| RNF03 | O sistema deve estar em português. | Usabilidade | A biblioteca universitária está localizada no Brasil, então o idioma será o português. Novos idiomas podem ser adicionados no futuro. |
| RNF04 | Toda mensagem de erro deve informar o motivo e a ação seguinte a ser tomada. | Usabilidade | O sistema será usado por pessoas não técnicas, e é importante que, quando essas pessoas enfrentarem um erro, elas entendam o problema e saibam como agir. |
| RNF05 | O sistema deve ser desenvolvido com a JDK 21 (LTS) | Restrição tecnológica | Restrição imposta pelo TP |
| RNF06 | O sistema deve ocultar senhas por padrão. | Segurança | Em ambientes públicos como uma biblioteca, é importante que a senha não seja exposta. |
