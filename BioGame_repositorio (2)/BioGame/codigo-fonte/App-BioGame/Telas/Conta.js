import { useState } from 'react'
import { View, Text, Image, TouchableOpacity, Alert, Modal, Pressable, TextInput, ActivityIndicator } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import Feather from '@expo/vector-icons/Feather'
import Ionicons from '@expo/vector-icons/Ionicons'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'
import Tela from '../components/Tela'
import CartaoItem from '../components/CartaoItem'
import { cores, fontes, useU } from '../theme'
import { sair, alterarNome, alterarSenha, enviarRedefinicaoSenha } from '../services/auth'
import { useProgresso } from '../Progresso'
import { dadosUsuario } from '../services/usuario'

export default function Conta() {
  const u = useU()
  const navigation = useNavigation()
  const [, atualizar] = useState(0)
  const { nome, email } = dadosUsuario()
  const { republicarPerfil } = useProgresso()
  const [modal, setModal] = useState(null) // 'info' | 'seguranca' | null
  const [campo1, setCampo1] = useState('')
  const [campo2, setCampo2] = useState('')
  const [campo3, setCampo3] = useState('')
  const [erro, setErro] = useState('')
  const [carregando, setCarregando] = useState(false)

  function abrir(qual) {
    setCampo1(qual === 'info' ? nome : '')
    setCampo2('')
    setCampo3('')
    setErro('')
    setModal(qual)
  }
  const fechar = () => !carregando && setModal(null)

  async function salvarNome() {
    const novo = campo1.trim()
    if (novo.length < 2) return setErro('Digite um nome com pelo menos 2 letras.')
    setCarregando(true)
    try {
      await alterarNome(novo)
      await republicarPerfil()
      atualizar((n) => n + 1)
      setModal(null)
    } catch (e) {
      console.log(e)
      setErro('Não foi possível salvar o nome agora. Tente de novo.')
    }
    setCarregando(false)
  }

  async function salvarSenha() {
    if (!campo1) return setErro('Digite a senha atual.')
    if (campo2.length < 6) return setErro('A nova senha precisa ter pelo menos 6 caracteres.')
    if (campo2 !== campo3) return setErro('A confirmação não é igual à nova senha.')
    setCarregando(true)
    try {
      await alterarSenha(campo1, campo2)
      setModal(null)
      Alert.alert('Senha alterada', 'Sua senha foi atualizada.')
    } catch (e) {
      const c = e?.code || ''
      setErro(c.includes('wrong-password') || c.includes('invalid-credential') ? 'A senha atual está incorreta.' : 'Não foi possível alterar a senha agora. Tente de novo.')
    }
    setCarregando(false)
  }

  async function esqueciSenha() {
    setCarregando(true)
    try {
      await enviarRedefinicaoSenha()
      setModal(null)
      Alert.alert('E-mail enviado', `Enviamos um link para redefinir a senha para ${email}.`)
    } catch (e) {
      setErro('Não foi possível enviar o e-mail agora. Tente de novo.')
    }
    setCarregando(false)
  }

  const entrada = {
    height: u(44), borderRadius: u(12), backgroundColor: '#F1F1F1', paddingHorizontal: u(14),
    fontFamily: fontes.regular, fontSize: u(15), color: '#333', marginBottom: u(10),
  }
  const botao = (texto, onPress, cor = cores.verde) => (
    <TouchableOpacity onPress={onPress} style={{ height: u(44), borderRadius: u(13), backgroundColor: cor, alignItems: 'center', justifyContent: 'center', flex: 1 }}>
      <Text style={{ fontFamily: fontes.bold, fontSize: u(15), color: cor === '#E6E6E6' ? '#333' : '#fff' }}>{texto}</Text>
    </TouchableOpacity>
  )

  async function realizarLogout() {
    try {
      await sair()
    } catch (e) {
      console.log(e)
    }
    navigation.reset({ index: 0, routes: [{ name: 'Login' }] })
  }


  return (
    <Tela fundo="menta">
      <Text style={{ fontFamily: fontes.bold, fontSize: u(29), color: cores.marrom, textAlign: 'center', marginTop: u(24) }}>
        Conta
      </Text>

      <View style={{ alignSelf: 'center', marginTop: u(43), width: u(170), height: u(170) }}>
        <Image source={require('../assets/img/avatar-brainroot.png')} style={{ width: u(170), height: u(170) }} />
      </View>

      <Text style={{ fontFamily: fontes.bold, fontSize: u(22), color: '#333', textAlign: 'center', marginTop: u(20) }}>{nome}</Text>
      <Text style={{ fontFamily: fontes.semi, fontSize: u(17), color: '#333', textAlign: 'center', marginTop: u(8) }}>{email}</Text>

      <CartaoItem
        style={{ marginTop: u(26) }}
        titulo="Informações pessoais"
        subtitulo="Nome e e-mail"
        icone={<Feather name="user" size={u(22)} color="#555" />}
        onPress={() => abrir('info')}
        textoX={75}
        largura={303}
      />
      <CartaoItem
        style={{ marginTop: u(15) }}
        titulo="Segurança e login"
        subtitulo="Alterar senha"
        icone={<MaterialCommunityIcons name="form-textbox-password" size={u(22)} color="#555" />}
        onPress={() => abrir('seguranca')}
        textoX={75}
        largura={303}
      />

      <TouchableOpacity
        onPress={realizarLogout}
        style={{ flexDirection: 'row', alignItems: 'center', marginTop: u(26), marginLeft: u(52), padding: u(4) }}
      >
        <Ionicons name="arrow-forward-circle-outline" size={u(27)} color="#F25C5C" />
        <Text style={{ fontFamily: fontes.semi, fontSize: u(16), color: '#F25C5C', marginLeft: u(12) }}>Sair</Text>
      </TouchableOpacity>
      <Modal transparent visible={!!modal} animationType="fade" onRequestClose={fechar}>
        <Pressable style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.35)', justifyContent: 'center', alignItems: 'center' }} onPress={fechar}>
          <Pressable style={{ width: u(310), backgroundColor: '#fff', borderRadius: u(20), padding: u(20) }} onPress={() => {}}>
            {modal === 'info' && (
              <>
                <Text style={{ fontFamily: fontes.bold, fontSize: u(19), color: cores.marrom, marginBottom: u(12) }}>Informações pessoais</Text>
                <Text style={{ fontFamily: fontes.semi, fontSize: u(13), color: '#666', marginBottom: u(4) }}>Nome</Text>
                <TextInput value={campo1} onChangeText={setCampo1} style={entrada} maxLength={30} />
                <Text style={{ fontFamily: fontes.semi, fontSize: u(13), color: '#666', marginBottom: u(4) }}>E-mail (não pode ser alterado)</Text>
                <Text style={[entrada, { textAlignVertical: 'center', lineHeight: u(44), color: '#888' }]}>{email}</Text>
              </>
            )}
            {modal === 'seguranca' && (
              <>
                <Text style={{ fontFamily: fontes.bold, fontSize: u(19), color: cores.marrom, marginBottom: u(12) }}>Alterar senha</Text>
                <TextInput value={campo1} onChangeText={setCampo1} style={entrada} placeholder="Senha atual" secureTextEntry />
                <TextInput value={campo2} onChangeText={setCampo2} style={entrada} placeholder="Nova senha" secureTextEntry />
                <TextInput value={campo3} onChangeText={setCampo3} style={entrada} placeholder="Confirmar nova senha" secureTextEntry />
                <TouchableOpacity onPress={esqueciSenha} disabled={carregando}>
                  <Text style={{ fontFamily: fontes.semi, fontSize: u(13), color: '#1E8A4C', textDecorationLine: 'underline' }}>
                    Esqueci a senha atual: enviar link por e-mail
                  </Text>
                </TouchableOpacity>
              </>
            )}
            {!!erro && <Text style={{ fontFamily: fontes.bold, fontSize: u(14), color: '#D33', marginTop: u(10) }}>{erro}</Text>}
            {carregando ? (
              <ActivityIndicator style={{ marginTop: u(16) }} color="#22C066" />
            ) : (
              <View style={{ flexDirection: 'row', marginTop: u(16), gap: u(10) }}>
                {botao('Cancelar', fechar, '#E6E6E6')}
                {botao('Salvar', modal === 'info' ? salvarNome : salvarSenha)}
              </View>
            )}
          </Pressable>
        </Pressable>
      </Modal>
    </Tela>
  )
}
