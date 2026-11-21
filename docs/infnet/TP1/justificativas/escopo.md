## O que entrou no TP1, e por quê
- Requisitos: atores, entidades, RNs, RF01-RF40 e RNF01-RNF06: são os requisitos mais fundamentais do projeto, e o TP diz que ele será a base de todo o bloco. Me esforcei para ser detalhista aqui para evitar problemas futuros no desenvolvimento.
- Diagrama com todos os casos de uso: os diagramas antes do desenvolvimento ajudam a ter um panorama amplo do projeto, e desenhar todos os casos de uso ajuda nisso.
- Descrição de UC01, UC02 e UC03 e seus filhos (UC03.1 até UC03.6): segui a lógica da dependência: para fazer as principais atividades (emprestar, devolver, cobrar multa etc), é preciso autenticar, cadastrar e gerenciar o acervo. As outras ficaram para o próximo TP. 
- Programa standalone simples, sem orientação a objeto: o enunciado pede tipos primitidos, operadores e controles de fluxo, sem orientação a objeto, então fiz um rascunho pequeno.

## O que ficou para depois
- UC04-UC08 (P13, P16): deixei os outros casos de uso para o próximo TP, pois dependem de autenticação e acervo prontos.
- Campos obrigatórios e identificador de livro e exemplar (P14, P15): impactam na modelagem de dados, fica melhor com diagramas de classes, no próximo TP
- Disponibilidade como RNF: como o projeto não será hospedado como um sistema real, fica difícil testar disponibilidade (ex.: com x usuários, o sistema deve ficar disponível y% do tempo). Por isso, foquei na persistência de dados, que é testável.
- Pendências abertas e dúvidas em aberto: P01, P06-P11, OQ04-OQ05: serão resolvidas nos próximos TPs, junto com o desenvolvimento dos próximos casos de uso e da modelagem de dados
- Persistência, API e autenticação real: o enunciado dos TPs já deixa claro que isso fica para as próximas etapas
- Rascunhos de UC04 e UC05.1: esses arquivos já estão no github, mas ainda são rascunhos e serão finalizados até a próxima entrega

### Dúvidas em aberto

Ver [dúvidas em aberto](duvidas.md) com estado "Aberto"

### Pendências

Ver [Pendências](pendencias.md) com estado "Aberto"
