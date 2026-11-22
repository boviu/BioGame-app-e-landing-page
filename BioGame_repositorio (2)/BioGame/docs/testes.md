# Testes

Testes manuais planejados. Preencha a coluna **Resultado** (Passou / Falhou) ao executar cada caso e registre a data e o dispositivo.

| ID | Caso de teste | Passos | Resultado esperado | Resultado |
| --- | --- | --- | --- | --- |
| T01 | Cadastro | Criar conta com e-mail e senha válidos | Conta criada e acesso à Home | Passou |
| T02 | Login inválido | Entrar com senha errada | Mensagem de erro | Passou |
| T03 | Quiz: erro | Escolher alternativa errada | Alternativa em vermelho e uma folha perdida | Passou |
| T04 | Quiz: acerto | Escolher a alternativa certa | Alternativa em verde, "Você sabia?" e botão Continuar | Passou |
| T05 | Desbloqueio | Concluir a fase 1.1 | Fase 1.2 liberada | Passou |
| T06 | Bônus | Concluir os 4 níveis | Nível bônus liberado; árvore dourada ao final | Passou |
| T07 | Progresso na nuvem | Concluir fase, sair e entrar de novo | Progresso mantido | Passou |
| T08 | Adicionar amigo | Amigos > Gerenciar amizades > Adicionar amigo, com e-mail de conta existente | Amigo aparece na lista | Passou |
| T09 | Voltar da lista | Na tela Gerenciar amizades, tocar na seta de voltar | Retorna à árvore de amigos | Passou |
| T10 | Aba Amigos | Estando na lista, tocar na aba Amigos | Retorna à árvore de amigos | Passou |
| T11 | Amigos na árvore | Ter 1 ou mais amigos e abrir a árvore | Amigo em destaque e avatares com nome nas folhas | Passou |
| T12 | Lista longa | Ter vários amigos e rolar a lista | Botão "Adicionar amigo" fica acima da barra de abas | Passou |
| T13 | Amigo inexistente | Adicionar e-mail sem conta | Mensagem informando que a conta não foi encontrada | Passou |
| T14 | Ranking | Abrir Ranking com amigos | Ordem por nível e pontos | Passou |
| T15 | Apagar dados | Mais > Privacidade > Apagar meus dados > Apagar tudo | Progresso zerado, árvore seca na Início, lista de amigos vazia, tutorial inicial exibido de novo e login mantido | Passou |
| T16 | Cancelar apagar dados | Abrir Apagar meus dados e tocar em Cancelar | Nada muda | Passou |
| T17 | Amigos continuam vendo você | Após o reset, abrir a lista de um amigo que tinha você | Você continua na lista, no nível 1 | Passou |
| T18 | Alterar nome | Mais > Conta > Informações pessoais, trocar o nome e salvar | Novo nome na Conta, no Ranking e na lista dos amigos | Passou |
| T19 | Alterar senha | Mais > Conta > Segurança e login, informar senha atual e nova | Mensagem de senha alterada; login funciona com a nova senha | Passou |
| T20 | Redefinir senha por e-mail | Segurança e login > link "Esqueci a senha atual" | E-mail de redefinição enviado | Passou |
| T22 | Recuperar senha no login | Entrar > Esqueceu a senha? > informar o e-mail da conta > Enviar link | Tela "E-mail enviado"; link chega ao e-mail e permite criar a nova senha | Passou |
| T21 | Vibração ao errar | Configurações > Alertas: escolher Vibrar e errar uma resposta | Aparelho vibra; em Silencioso ou com alertas desativados, não vibra | Passou |
| T23 | Confirmação de senha no cadastro | Preencher e-mail, senha e confirmação diferente | Mensagem de que a confirmação não é igual | Passou |
