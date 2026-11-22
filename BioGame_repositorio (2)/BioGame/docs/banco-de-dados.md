# Banco de dados

O app usa o **Cloud Firestore** (NoSQL). Autenticação por **Firebase Authentication** (e-mail e senha).

Diagramas MER e DER: veja [`imagens/diagramas`](../imagens/diagramas) (`mer.png` e `der.png`).

| Coleção | Conteúdo |
| --- | --- |
| `usuarios/{uid}` | `fasesConcluidas`, `concluido`, `tutorialInicialConcluido`, `preferencias` (`vibrar`, `notificacoes`), `atualizadoEm` |
| `usuarios/{uid}/amigos/{amigoUid}` | `uid`, `favorito`, `adicionadoEm` |
| `perfis/{uid}` | perfil público: `nome`, `emailLower`, `nivel`, `pontos`, `concluido`, `atualizadoEm` |

O perfil é publicado quando o jogador entra e quando muda de fase; a busca de amigos é feita por `perfis.emailLower`.

## Regras de segurança

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /perfis/{uid} {
      allow read: if request.auth != null;
      allow write: if request.auth != null && request.auth.uid == uid;
    }
    match /usuarios/{uid} {
      allow read, write: if request.auth != null && request.auth.uid == uid;
      match /amigos/{amigoUid} {
        allow read, write: if request.auth != null && request.auth.uid == uid;
      }
    }
  }
}
```
