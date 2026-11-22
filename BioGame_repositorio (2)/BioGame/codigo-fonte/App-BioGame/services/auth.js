import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    updateProfile,
    updatePassword,
    reauthenticateWithCredential,
    EmailAuthProvider,
    sendPasswordResetEmail
} from "firebase/auth"

import {auth} from '../configuration/firebase'

export async function cadastrar(email, senha){
    return await createUserWithEmailAndPassword(
        auth,
        email,
        senha
    )
}

export async function entrar(email, senha){
    return await signInWithEmailAndPassword(
        auth,
        email,
        senha
    )
}
export async function sair(){
    return await signOut(auth)
}

export async function alterarNome(nome){
    await updateProfile(auth.currentUser, { displayName: nome })
}

// Troca a senha: o Firebase exige confirmar a senha atual antes.
export async function alterarSenha(senhaAtual, novaSenha){
    const u = auth.currentUser
    const cred = EmailAuthProvider.credential(u.email, senhaAtual)
    await reauthenticateWithCredential(u, cred)
    await updatePassword(u, novaSenha)
}

export async function enviarRedefinicaoSenha(){
    await sendPasswordResetEmail(auth, auth.currentUser.email)
}

// Recuperar senha (tela de login): o Firebase envia um e-mail com o link para criar a nova senha.
export async function recuperarSenhaPorEmail(email){
    await sendPasswordResetEmail(auth, email)
}
