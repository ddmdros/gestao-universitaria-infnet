# Entidades

Fonte: [enunciado TP](../infnet/TP1/enunciado.md).

| ID | Nome | Atributos | Relacionados |
|---|---|---|---|
| E01 | Livro | título, autor e ISBN| |
| E02 | Exemplar | código de patrimônio, estado de conservação (conservado, danificado, em_reparo, aposentado) | vínculo com um Livro |
| E03 | Empréstimo | membro, data de retirada, prazo de devolução e data efetiva de devolução | Exemplar |
| E04 | Reserva | membro e data da reserva | Livro |
| E05 | Multa | membro, valor e situação de pagamento | Empréstimo |
| E06 | Membro | nome, matrícula e tipo (aluno, professor ou funcionário) | |