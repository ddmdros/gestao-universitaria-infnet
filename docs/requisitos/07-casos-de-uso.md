# Casos de uso
WIP

## Realizar empréstimo (RF14-RF19)
Ator principal: Administrador

### Cenário principal (PRESENCIAL)
1. O Membro fornece suas credenciais de acesso ao Sistema
2. O Sistema valida as credenciais do Membro
3. O Sistema verifica se o membro não tem condições bloqueantes de empréstimo
4. O Administrador informa ao Sistema o ID do Exemplar
5. O Sistema verifica se o Exemplar pode ser emprestado
6. O Administrador realiza o Empréstimo do Exemplar em nome do Membro

#### Extensões
1.a) O Membro não encontra o exemplar que deseja pegar emprestado
    1.a) O Membro e se dirige ao balcão para perguntar ao Administrador se há exemplares disponíveis do livro que ele deseja pegar emprestado
        .1.a.1) Todos os exemplares estão reservados
            1.a.1.1) O Membro solicita uma Reserva
        .1.a.2) O exemplar está na biblioteca, mas o usuário não encontrou
            .1.a.2.1) O Administrador informa ao usuário onde ele pode encontrar o exemplar
    1.b) O Membro consulta no sistema se há exemplares disponíveis do livro que ele deseja pegar emprestado
        .1.b.1) Todos os exemplares estão reservados
            1.b.1.1) O Membro solicita uma Reserva
        .1.b.1) O exemplar está na biblioteca, mas o usuário não encontrou
            .1.b.1.2) O Membro solicita uma Reserva
3.a) O Membro não tem cadastro
3.b) O Membro não lembra suas credenciais de acesso
4.a) As credenciais de acesso do Membro são inválidas
5.a) O Membro tem exemplares em atraso
5.b) O Membro tem multas a pagar
5.c) O Membro excedeu o limite de exemplare que pode pegar emprestado
6.a) O exemplar não tem ID válido
7.a) O exemplar não deveria estar disponível para empréstimo, pois sua condição é diferente de conservado 


### Cenário principal (ON-LINE)
1. O membro escolhe o exemplar que deseja pegar emprestado 
2. 

## Processar devolução (RF20-RF25)

## Reservar livro (RF28-RF29)