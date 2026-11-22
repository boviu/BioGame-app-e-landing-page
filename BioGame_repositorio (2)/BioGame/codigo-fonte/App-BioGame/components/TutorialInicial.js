import { useEffect, useState } from 'react'
import { Modal, View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import Feather from '@expo/vector-icons/Feather'
import { cores, fontes, useU } from '../theme'

const PASSOS = [
  {
    icone: '🌱',
    titulo: 'Bem-vindo ao BioGame!',
    texto: 'Sua missão é recuperar a natureza. Ao longo do jogo, suas escolhas e conhecimentos ajudam a cuidar do meio ambiente e fazer sua árvore crescer.',
  },
  {
    icone: '🌳',
    titulo: 'Acompanhe sua árvore',
    texto: 'Na tela inicial, observe a árvore e o cenário. Eles mostram visualmente o avanço da sua jornada conforme você conclui as fases.',
  },
  {
    icone: '🧩',
    titulo: 'Explore as fases',
    texto: 'Toque em “Continuar” para acessar os níveis. Antes de cada desafio, você verá uma breve história. Depois, responda às perguntas para avançar.',
  },
  {
    icone: '🍃',
    titulo: 'Cuide das suas vidas',
    texto: 'Durante os quizzes, você começa com três vidas. Respostas incorretas consomem uma folha. Complete as fases para desbloquear novos desafios e acompanhe seu progresso nas outras abas.',
  },
  {
    icone: '🧭',
    titulo: 'Tudo pronto para começar?',
    texto: 'Você também pode explorar suas árvores, consultar o ranking, encontrar amigos e acessar as opções da sua conta pela barra de navegação. Boa jornada!',
  },
]

export default function TutorialInicial({ visible, onClose }) {
  const u = useU()
  const [passo, setPasso] = useState(0)

  useEffect(() => {
    if (visible) setPasso(0)
  }, [visible])

  const atual = PASSOS[passo]
  const ultimo = passo === PASSOS.length - 1

  function avancar() {
    if (ultimo) onClose()
    else setPasso((p) => p + 1)
  }

  return (
    <Modal visible={visible} transparent animationType="fade" statusBarTranslucent onRequestClose={onClose}>
      <View style={styles.fundo}>
        <View style={[styles.cartao, { width: u(340), borderRadius: u(28), padding: u(24) }]}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <Text style={{ fontFamily: fontes.semi, color: '#6B6B6B', fontSize: u(13) }}>GUIA INICIAL</Text>
            <TouchableOpacity onPress={onClose} hitSlop={{ top: 12, bottom: 12, left: 12, right: 12 }}>
              <Feather name="x" size={u(22)} color="#777" />
            </TouchableOpacity>
          </View>

          <View style={{ alignItems: 'center', marginTop: u(18) }}>
            <View style={{ width: u(86), height: u(86), borderRadius: u(43), backgroundColor: '#EAF6E9', alignItems: 'center', justifyContent: 'center' }}>
              <Text style={{ fontSize: u(43) }}>{atual.icone}</Text>
            </View>
            <Text style={{ fontFamily: fontes.bold, fontSize: u(23), color: cores.marrom, textAlign: 'center', marginTop: u(18) }}>
              {atual.titulo}
            </Text>
            <Text style={{ fontFamily: fontes.regular, fontSize: u(16), lineHeight: u(24), color: '#444', textAlign: 'center', marginTop: u(12) }}>
              {atual.texto}
            </Text>
          </View>

          <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: u(24), gap: u(7) }}>
            {PASSOS.map((_, i) => (
              <View key={i} style={{ width: i === passo ? u(22) : u(7), height: u(7), borderRadius: u(5), backgroundColor: i === passo ? cores.verde : '#D7E2D7' }} />
            ))}
          </View>

          <TouchableOpacity activeOpacity={0.85} onPress={avancar} style={{ marginTop: u(22), height: u(49), borderRadius: u(13), backgroundColor: cores.verde, borderBottomWidth: u(4), borderBottomColor: cores.verdeSombra, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontFamily: fontes.bold, color: '#fff', fontSize: u(17) }}>
              {ultimo ? 'Começar a jogar' : 'Próximo'}
            </Text>
          </TouchableOpacity>
          {!ultimo && (
            <TouchableOpacity onPress={onClose} style={{ alignSelf: 'center', padding: u(10), marginTop: u(5) }}>
              <Text style={{ fontFamily: fontes.semi, fontSize: u(14), color: '#777' }}>Pular tutorial</Text>
            </TouchableOpacity>
          )}
          <Text style={{ fontFamily: fontes.regular, fontSize: u(12), color: '#999', textAlign: 'center', marginTop: ultimo ? u(10) : 0 }}>
            {passo + 1} de {PASSOS.length}
          </Text>
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  fundo: { flex: 1, backgroundColor: 'rgba(30, 42, 32, 0.58)', justifyContent: 'center', alignItems: 'center', paddingHorizontal: 18 },
  cartao: { backgroundColor: '#FFFDF8', borderWidth: 1, borderColor: '#E7E3D8', shadowColor: '#000', shadowOpacity: 0.2, shadowRadius: 18, shadowOffset: { width: 0, height: 8 }, elevation: 12 },
})
