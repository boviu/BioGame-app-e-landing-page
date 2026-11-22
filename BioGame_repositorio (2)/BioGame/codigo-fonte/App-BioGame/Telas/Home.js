import { useEffect, useState } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'
import Tela from '../components/Tela'
import Faixa from '../components/Faixa'
import { cores, fontes, useU } from '../theme'
import { useProgresso } from '../Progresso'
import { getNivel } from '../dados/niveis'
import { auth } from '../configuration/firebase'
import { tutorialInicialConcluido, marcarTutorialInicialConcluido } from '../services/progressoNuvem'
import TutorialInicial from '../components/TutorialInicial'

const K = 1.15
const BASE = 639 // y (sem a área segura) onde termina cada árvore, em cima do chão
const ARVORES = [
  { img: require('../assets/img/arvore-etapa0.png'), left: 57, top: 158, w: 277, h: 481 },
  ...[
    [require('../assets/img/arvore-etapa1.png'), 203, 389],
    [require('../assets/img/arvore-etapa2.png'), 230, 388],
    [require('../assets/img/arvore-etapa3.png'), 225, 307],
    [require('../assets/img/arvore-etapa4.png'), 256, 415],
  ].map(([img, w, h]) => ({ img, w: w * K, h: h * K, left: 196.5 - (w * K) / 2, top: BASE - h * K })),
]

export default function Home() {
  const u = useU()
  const insets = useSafeAreaInsets()
  const navigation = useNavigation()
  const { concluido, nivelAtual, etapa } = useProgresso()
  const [tutorialVisivel, setTutorialVisivel] = useState(false)

  useEffect(() => {
    let ativo = true
    async function verificarTutorial() {
      const usuario = auth.currentUser
      if (!usuario) return
      try {
        const jaConcluiu = await tutorialInicialConcluido(usuario.uid)
        if (ativo && !jaConcluiu) setTutorialVisivel(true)
      } catch (erro) {
        console.log('Não foi possível verificar o tutorial inicial:', erro)
        // Se a consulta falhar, ainda oferecemos o guia nesta entrada.
        if (ativo) setTutorialVisivel(true)
      }
    }
    verificarTutorial()
    return () => { ativo = false }
  }, [])

  async function fecharTutorial() {
    setTutorialVisivel(false)
    const usuario = auth.currentUser
    if (!usuario) return
    try {
      await marcarTutorialInicialConcluido(usuario.uid)
    } catch (erro) {
      console.log('Não foi possível salvar a conclusão do tutorial:', erro)
    }
  }
  const nivel = getNivel(nivelAtual)
  const arvore = ARVORES[Math.min(etapa, ARVORES.length - 1)]
  const frase = concluido ? 'Sua árvore é incrível!' : etapa === 0 ? 'Você pode salvá-la?' : 'Continue cuidando dela!'

  function continuar() {
    if (concluido) {
      navigation.navigate('Arvores')
    } else {
      navigation.navigate('Niveis')
    }
  }

  return (
    <Tela fundo={concluido ? 'verde' : 'pessego'}>
      {concluido ? (
        <Image
          source={require('../assets/img/home-dourada.png')}
          resizeMode="stretch"
          style={{ position: 'absolute', left: 0, top: -insets.top, width: u(393), height: u(852) }}
        />
      ) : (
        <>
          <Image
            source={require('../assets/img/chao.png')}
            resizeMode="stretch"
            style={{ position: 'absolute', left: u(44.6), top: u(592.3), width: u(302), height: u(86.4) }}
          />
          <Image
            source={arvore.img}
            resizeMode="stretch"
            style={{ position: 'absolute', left: u(arvore.left), top: u(arvore.top), width: u(arvore.w), height: u(arvore.h) }}
          />
        </>
      )}

      {concluido ? (
        <Faixa
          rotulo="Meio ambiente"
          titulo="Árvore dourada lendária"
          cor={cores.verde}
          sombra={cores.verdeSombra}
          style={{ position: 'absolute', top: u(29), left: u(57) }}
        />
      ) : (
        <Faixa
          rotulo={nivel.rotulo}
          titulo={nivel.arvore}
          cor={cores[nivel.cor]}
          sombra={cores[nivel.cor + 'Sombra']}
          style={{ position: 'absolute', top: u(30), left: u(57) }}
        />
      )}

      <View style={{ position: 'absolute', top: u(130), left: u(57), flexDirection: 'row', alignItems: 'flex-end' }}>
        {concluido && (
          <MaterialCommunityIcons
            name="star-four-points"
            size={u(15)}
            color="#F3C94B"
            style={{ position: 'absolute', left: -u(22), top: u(2) }}
          />
        )}
        <View style={{ width: etapa === 0 || concluido ? u(181) : undefined, borderBottomWidth: 2, borderBottomColor: '#2A1A12', paddingBottom: u(1) }}>
          <Text style={{ fontFamily: fontes.bold, fontSize: u(17.5), color: cores.marrom }}>
            {frase}
          </Text>
        </View>
        <TouchableOpacity onPress={continuar} style={{ marginLeft: u(10) }}>
          <Text style={{ fontFamily: fontes.bold, fontSize: u(17.5), color: cores.verdeLink }}>Continuar</Text>
        </TouchableOpacity>
      </View>
      <TutorialInicial visible={tutorialVisivel} onClose={fecharTutorial} />
    </Tela>
  )
}
