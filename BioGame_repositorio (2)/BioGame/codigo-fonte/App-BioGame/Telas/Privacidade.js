import { useState } from 'react'
import { Text, View, Modal, Pressable, TouchableOpacity, ActivityIndicator, Alert } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'
import Tela from '../components/Tela'
import CartaoItem from '../components/CartaoItem'
import { cores, fontes, useU } from '../theme'
import { useProgresso } from '../Progresso'
import { irParaHome } from '../services/navegacao'

export default function Privacidade() {
  const u = useU()
  const navigation = useNavigation()
  const [modal, setModal] = useState(false)
  const { reiniciarConta } = useProgresso()
  const [erro, setErro] = useState('')
  const [apagando, setApagando] = useState(false)

  function abrir() {
    setErro('')
    setModal(true)
  }

  function fechar() {
    if (!apagando) setModal(false)
  }

  async function confirmar() {
    setApagando(true)
    setErro('')
    const r = await reiniciarConta()
    setApagando(false)
    if (r.ok) {
      setModal(false)
      Alert.alert('Dados apagados', 'Seu progresso e sua lista de amigos foram apagados. Sua conta continua ativa e você recomeça do nível 1.')
      irParaHome(navigation)
    } else {
      setErro(r.erro)
    }
  }

  return (
    <Tela fundo="menta">
      <Text style={{ fontFamily: fontes.bold, fontSize: u(29), color: cores.marrom, textAlign: 'center', marginTop: u(26) }}>
        Privacidade
      </Text>
      <CartaoItem
        style={{ marginTop: u(70), marginLeft: u(35), alignSelf: 'flex-start' }}
        titulo="Apagar meus dados"
        pesoTitulo="media"
        textoX={76}
        largura={304}
        icone={<MaterialCommunityIcons name="alert-circle" size={u(24)} color="#7C7A8E" />}
        onPress={abrir}
      />

      <Modal transparent visible={modal} animationType="fade" onRequestClose={fechar}>
        <Pressable
          style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.35)', justifyContent: 'center', alignItems: 'center' }}
          onPress={fechar}
        >
          <Pressable style={{ width: u(310), backgroundColor: '#fff', borderRadius: u(20), padding: u(20) }} onPress={() => {}}>
            <Text style={{ fontFamily: fontes.bold, fontSize: u(19), color: cores.marrom, marginBottom: u(10) }}>
              Apagar meus dados
            </Text>
            <Text style={{ fontFamily: fontes.regular, fontSize: u(14), lineHeight: u(20), color: '#555', marginBottom: u(12) }}>
              Isso apaga o seu progresso e a sua lista de amigos, e você recomeça do nível 1. Sua conta e seu login continuam, e seus amigos continuam vendo você (no nível 1). Não dá para desfazer.
            </Text>
            {!!erro && <Text style={{ fontFamily: fontes.bold, fontSize: u(14), color: '#D33', marginTop: u(10) }}>{erro}</Text>}
            {apagando ? (
              <ActivityIndicator style={{ marginTop: u(18) }} color={cores.vermelho} />
            ) : (
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: u(18) }}>
                <TouchableOpacity
                  onPress={fechar}
                  style={{ width: u(128), height: u(44), borderRadius: u(13), backgroundColor: '#E6E6E6', alignItems: 'center', justifyContent: 'center' }}
                >
                  <Text style={{ fontFamily: fontes.bold, fontSize: u(16), color: '#333' }}>Cancelar</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={confirmar}
                  style={{
                    width: u(128), height: u(44), borderRadius: u(13), backgroundColor: cores.vermelho,
                    borderBottomWidth: u(4), borderBottomColor: cores.vermelhoSombra, alignItems: 'center', justifyContent: 'center',
                  }}
                >
                  <Text style={{ fontFamily: fontes.bold, fontSize: u(16), color: '#fff' }}>Apagar tudo</Text>
                </TouchableOpacity>
              </View>
            )}
          </Pressable>
        </Pressable>
      </Modal>
    </Tela>
  )
}
