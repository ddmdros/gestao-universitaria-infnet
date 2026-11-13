## UC01 - Criar credenciais

Ator principal: AdministradorDeCredenciais
Ator secundário: Membro ou Administrador

### Resumo: O AdministradorDeCredenciais cria credenciais válidas para o administrador ou membro solicitante

### Pré-condições:

1. Um admnistrador do tipo administradorDeCredenciais válido
2. Um membro ou administrador solicitante

### Pós-condições: o membro ou admnistrador solicitante agora possui credenciais válidas

### Cenário principal

1. O membro ou administrador envia uma solicitação de criação de credenciais para o administradorDeCredenciais com os documentos que comprovam o seu vínculo com a universidade
   1. Documentos válidos
      1. Membro
         1. Estudante: atestado de matrícula/histórico escolar recente (últimos 3 meses)
         2. Professor: contracheque recente (últimos 3 meses)
         3. Funcionário: contracheque recente (últimos 3 meses)
      2. Administrador
         1. Bibliotecário: contracheque recente (últimos 3 meses)
2. O administradorDeCredenciais cria as credenciais do solicitante
3. Se solicitado, o solicitante pode receber uma notificação comprovando a operação
