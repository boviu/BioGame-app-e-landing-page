import { doc, getDoc, setDoc, serverTimestamp } from 'firebase/firestore'
import { db } from '../configuration/firebase'

export const PREFERENCIAS_PADRAO = { vibrar: true, notificacoes: true }

export async function carregarPreferencias(uid) {
  const snap = await getDoc(doc(db, 'usuarios', uid))
  return { ...PREFERENCIAS_PADRAO, ...((snap.exists() && snap.data().preferencias) || {}) }
}

export async function salvarPreferencias(uid, preferencias) {
  await setDoc(doc(db, 'usuarios', uid), { preferencias, atualizadoEm: serverTimestamp() }, { merge: true })
}
