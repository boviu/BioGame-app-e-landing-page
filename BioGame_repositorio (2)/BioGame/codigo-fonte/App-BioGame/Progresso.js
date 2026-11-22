import { createContext, useContext, useEffect, useRef, useState } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './configuration/firebase'
import { carregarProgresso, salvarProgresso } from './services/progressoNuvem'
import { apagarDadosNuvem } from './services/conta'
import { carregarPreferencias, salvarPreferencias, PREFERENCIAS_PADRAO } from './services/preferencias'
import {
  publicarPerfil,
  buscarPerfilPorEmail,
  listarAmigos,
  adicionarAmigoNuvem,
  definirFavoritoNuvem,
  removerAmigoNuvem,
} from './services/amigosNuvem'
import { NIVEIS, FASES_POR_NIVEL, TOTAL_NIVEIS } from './dados/niveis'

const ProgressoContext = createContext(null)

export { TOTAL_NIVEIS, FASES_POR_NIVEL }

export const TOTAL_FASES = TOTAL_NIVEIS * FASES_POR_NIVEL

export function ProgressoProvider({ children }) {
  const [fasesConcluidas, setFasesConcluidas] = useState([])
  const [concluido, setConcluido] = useState(false)
  const [amigos, setAmigos] = useState([])
  const [vidas, setVidas] = useState(3)
  const [preferencias, setPreferencias] = useState(PREFERENCIAS_PADRAO)

  const uidRef = useRef(null)
  const pedidoAmigosRef = useRef(0)
  const [carregado, setCarregado] = useState(false)

  useEffect(() => {
    const cancelar = onAuthStateChanged(auth, async (usuario) => {
      uidRef.current = usuario ? usuario.uid : null
      setCarregado(false)
      if (!usuario) {
        setFasesConcluidas([])
        setConcluido(false)
        setAmigos([])
        setPreferencias(PREFERENCIAS_PADRAO)
        return
      }
      carregarPreferencias(usuario.uid)
        .then((p) => { if (uidRef.current === usuario.uid) setPreferencias(p) })
        .catch((e) => console.log('Não foi possível carregar as preferências:', e))
      try {
        const salvo = await carregarProgresso(usuario.uid)
        if (uidRef.current !== usuario.uid) return
        setFasesConcluidas(salvo ? salvo.fasesConcluidas : [])
        setConcluido(salvo ? salvo.concluido : false)
      } catch (e) {
        console.log('Não foi possível carregar o progresso:', e)
        return
      }
      if (uidRef.current === usuario.uid) setCarregado(true)
      recarregarAmigos()
    })
    return cancelar
  }, [])

  const niveisCompletos = NIVEIS.filter((n) => Array.from({ length: FASES_POR_NIVEL }, (_, i) => i + 1).every((f) => fasesConcluidas.includes(`${n.id}.${f}`))).length
  
  const nivelPerfil = concluido ? 5 : Math.min(niveisCompletos + 1, 5)
  const pontos = fasesConcluidas.length + (concluido ? 1 : 0)

  useEffect(() => {
    if (!carregado || !uidRef.current) return
    const uid = uidRef.current
    salvarProgresso(uid, { fasesConcluidas, concluido }).catch((e) => console.log('Não foi possível salvar o progresso:', e))
    const u = auth.currentUser
    const email = u?.email || ''
    publicarPerfil(uid, {
      nome: u?.displayName || email.split('@')[0] || 'Jogador',
      email,
      nivel: nivelPerfil,
      pontos,
      concluido,
    }).catch((e) => console.log('Não foi possível publicar o perfil:', e))
  }, [fasesConcluidas, concluido, carregado])

  async function recarregarAmigos() {
    const uid = uidRef.current
    if (!uid) return
    // Só a resposta do pedido mais recente vale (evita uma resposta antiga apagar a lista atualizada).
    const pedido = ++pedidoAmigosRef.current
    try {
      const lista = await listarAmigos(uid)
      if (uidRef.current === uid && pedido === pedidoAmigosRef.current) setAmigos(lista)
    } catch (e) {
      console.log('Não foi possível carregar os amigos:', e)
    }
  }

  async function adicionarAmigoPorEmail(emailDigitado) {
    const uid = uidRef.current
    const email = (emailDigitado || '').trim().toLowerCase()
    if (!uid) return { ok: false, erro: 'Entre na sua conta para adicionar amigos.' }
    if (!email || !email.includes('@')) return { ok: false, erro: 'Digite o e-mail da conta do seu amigo.' }
    if (email === (auth.currentUser?.email || '').toLowerCase()) return { ok: false, erro: 'Você não pode adicionar a si mesmo.' }
    try {
      const perfil = await buscarPerfilPorEmail(email)
      if (!perfil) return { ok: false, erro: 'Nenhuma conta do BioGame encontrada com esse e-mail. Peça para a pessoa abrir o app e entrar na conta.' }
      if (amigos.some((a) => a.id === perfil.uid)) return { ok: false, erro: 'Essa pessoa já está na sua lista de amigos.' }
      await adicionarAmigoNuvem(uid, perfil.uid)
      await recarregarAmigos()
      return { ok: true }
    } catch (e) {
      console.log(e)
      return { ok: false, erro: 'Não foi possível adicionar agora. Verifique sua conexão e tente de novo.' }
    }
  }

  // "Apagar meus dados": zera o progresso, a lista de amigos e o tutorial; a conta e o perfil público continuam (nível 1).
  async function reiniciarConta() {
    const uid = uidRef.current
    if (!uid) return { ok: false, erro: 'Entre na sua conta para apagar os dados.' }
    try {
      await apagarDadosNuvem(uid)
      const u = auth.currentUser
      const email = u?.email || ''
      await publicarPerfil(uid, { nome: u?.displayName || email.split('@')[0] || 'Jogador', email, nivel: 1, pontos: 0, concluido: false })
      setFasesConcluidas([])
      setConcluido(false)
      setAmigos([])
      setVidas(3)
      return { ok: true }
    } catch (e) {
      console.log('Não foi possível apagar os dados:', e)
      return { ok: false, erro: 'Não foi possível apagar agora. Verifique sua conexão e tente de novo.' }
    }
  }

  // Alertas e notificações: guarda a escolha na nuvem para valer em qualquer aparelho.
  function atualizarPreferencias(parcial) {
    const novas = { ...preferencias, ...parcial }
    setPreferencias(novas)
    const uid = uidRef.current
    if (uid) salvarPreferencias(uid, novas).catch((e) => console.log('Não foi possível salvar as preferências:', e))
  }

  // Informações pessoais: depois de trocar o nome no login, atualiza o perfil que os amigos veem.
  async function republicarPerfil() {
    const uid = uidRef.current
    const u = auth.currentUser
    if (!uid || !u) return
    const email = u.email || ''
    await publicarPerfil(uid, { nome: u.displayName || email.split('@')[0] || 'Jogador', email, nivel: nivelPerfil, pontos, concluido })
  }

  function perderVida() {
    setVidas((v) => Math.max(v - 1, 0))
  }
  function reiniciarRodada() {
    setVidas(3)
  }

  const faseConcluida = (n, f) => fasesConcluidas.includes(`${n}.${f}`)
  const nivelConcluido = (n) => Array.from({ length: FASES_POR_NIVEL }, (_, i) => i + 1).every((f) => faseConcluida(n, f))
  const nivelDesbloqueado = (n) => n === 1 || nivelConcluido(n - 1)
  const faseDesbloqueada = (n, f) => nivelDesbloqueado(n) && (f === 1 || faseConcluida(n, f - 1))
  const bonusDisponivel = fasesConcluidas.length >= TOTAL_FASES
  const nivelAtual = (NIVEIS.find((n) => !nivelConcluido(n.id)) || NIVEIS[NIVEIS.length - 1]).id

  function concluirFase(n, f) {
    const id = `${n}.${f}`
    setFasesConcluidas((l) => (l.includes(id) ? l : [...l, id]))
  }

  function alternarFavorito(id) {
    const atual = amigos.find((x) => x.id === id)
    if (!atual || !uidRef.current) return
    setAmigos((l) => l.map((a) => (a.id === id ? { ...a, favorito: !a.favorito } : a)))
    definirFavoritoNuvem(uidRef.current, id, !atual.favorito).catch((e) => console.log(e))
  }
  function removerAmigo(id) {
    if (!uidRef.current) return
    setAmigos((l) => l.filter((a) => a.id !== id))
    removerAmigoNuvem(uidRef.current, id).catch((e) => console.log(e))
  }

  return (
    <ProgressoContext.Provider
      value={{
        concluido,
        setConcluido,
        vidas,
        preferencias,
        atualizarPreferencias,
        republicarPerfil,
        perderVida,
        reiniciarRodada,
        fasesConcluidas,
        concluirFase,
        faseConcluida,
        nivelConcluido,
        nivelDesbloqueado,
        faseDesbloqueada,
        bonusDisponivel,
        nivelAtual,
        etapa: niveisCompletos,
        nivelPerfil,
        pontos,
        amigos,
        recarregarAmigos,
        adicionarAmigoPorEmail,
        alternarFavorito,
        removerAmigo,
        reiniciarConta,
      }}
    >
      {children}
    </ProgressoContext.Provider>
  )
}

export function useProgresso() {
  return useContext(ProgressoContext)
}