import { collection, deleteDoc, doc, getDocs, serverTimestamp, setDoc } from 'firebase/firestore'
import { db } from '../configuration/firebase'

// "Apagar meus dados" = reset da conta. A conta de login e o perfil público continuam existindo
// (quem tem você como amigo continua vendo você, agora no nível 1 com 0 pontos).
// O que é apagado no Firestore:
//   usuarios/{uid}/amigos/*  -> a sua lista de amigos
//   usuarios/{uid}           -> progresso zerado (fasesConcluidas, concluido) e tutorial inicial volta a aparecer
// O perfil público (perfis/{uid}) é atualizado para nível 1 em Progresso.js (reiniciarConta).
export async function apagarDadosNuvem(uid) {
  const amigos = await getDocs(collection(db, 'usuarios', uid, 'amigos'))
  await Promise.all(amigos.docs.map((d) => deleteDoc(d.ref)))
  await setDoc(
    doc(db, 'usuarios', uid),
    { fasesConcluidas: [], concluido: false, tutorialInicialConcluido: false, atualizadoEm: serverTimestamp() },
    { merge: true }
  )
}
