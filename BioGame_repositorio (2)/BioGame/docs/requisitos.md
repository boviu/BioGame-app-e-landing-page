# Requisitos

## Requisitos funcionais

| ID | Requisito |
| --- | --- |
| RF01 | O usuário deve poder criar conta informando e-mail, senha e confirmação de senha, e entrar com e-mail e senha. |
| RF02 | O usuário deve poder recuperar a senha pelo e-mail: o app envia um link do Firebase para criar a nova senha. |
| RF03 | O jogo deve ter 4 níveis de 4 fases; cada fase tem narrativa e 2 perguntas de múltipla escolha. |
| RF04 | Cada erro deve custar uma folha de vida e permitir nova tentativa. |
| RF05 | Após acertar, o app deve exibir uma explicação curta ("Você sabia?"). |
| RF06 | Fases e níveis devem ser desbloqueados em sequência. |
| RF07 | O nível bônus deve ser liberado após concluir os 4 níveis. |
| RF08 | A árvore da tela inicial deve mudar a cada nível concluído e ficar dourada ao fim do bônus. |
| RF09 | O progresso deve ser salvo na nuvem por conta. |
| RF10 | O usuário deve poder adicionar amigos pelo e-mail, marcar favorito e remover. |
| RF11 | A árvore de amigos deve exibir os amigos do usuário. |
| RF12 | O ranking deve ordenar o usuário e os amigos por nível e pontos. |
| RF13 | O usuário deve poder consultar conta, configurações e privacidade. |
| RF14 | O usuário deve poder apagar seus dados (progresso e lista de amigos), o que reinicia a conta no nível 1 sem excluí-la. |
| RF15 | O usuário deve poder alterar o nome e a senha da conta (confirmando a senha atual) e pedir por e-mail um link de redefinição de senha. |
| RF16 | O usuário deve poder escolher se o aplicativo vibra ao errar uma resposta e ativar ou desativar os alertas; a escolha é salva na conta. |

## Requisitos não funcionais

| ID | Requisito |
| --- | --- |
| RNF01 | Aplicativo mobile (Android e iOS) feito com React Native e Expo. |
| RNF02 | Conteúdo educativo baseado em fontes confiáveis (veja o PDF da conclusão). |
| RNF03 | Interface simples, com linguagem acessível. |
| RNF04 | Dados do usuário protegidos por regras de acesso do Firestore. |

## Regras de negócio

- O conteúdo do jogo fica em `codigo-fonte/App-BioGame/dados/niveis.js`.
- A amizade não é mútua: só quem adiciona passa a ver o amigo.
- Para ser encontrado, o amigo precisa ter entrado no app ao menos uma vez (perfil público).
