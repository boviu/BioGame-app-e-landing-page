import { useState } from 'react'
import { View, ImageBackground, StyleSheet, TouchableOpacity, Text, TextInput, Image, ActivityIndicator } from 'react-native'
import { useNavigation } from '@react-navigation/native'
//fonte de aplicativo
import { useFonts } from 'expo-font'
import { Nunito_400Regular, Nunito_500Medium, Nunito_600SemiBold, Nunito_700Bold } from '@expo-google-fonts/nunito'

import { recuperarSenhaPorEmail } from '../services/auth'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'


export default function Cadastro() {

  const [fontsLoaded] = useFonts({
    Nunito: Nunito_400Regular,
    NunitoMedium: Nunito_500Medium,
    NunitoSemiBold: Nunito_600SemiBold,
    NunitoBold: Nunito_700Bold,
  })
  if (!fontsLoaded) {
    return null;
  }
  const navigation = useNavigation()
  const [email, setEmail] = useState('')
  const [erro, setErro] = useState('')
  const [enviando, setEnviando] = useState(false)

  async function enviar() {
    const e = email.trim()
    if (!e || !e.includes('@')) return setErro('Digite o e-mail da sua conta.')
    setErro('')
    setEnviando(true)
    try {
      await recuperarSenhaPorEmail(e)
      navigation.navigate('RecuperarSenha2', { email: e })
    } catch (err) {
      const c = err?.code || ''
      if (c.includes('invalid-email')) setErro('E-mail inválido.')
      else if (c.includes('user-not-found')) setErro('Não encontramos conta com esse e-mail.')
      else if (c.includes('too-many-requests')) setErro('Muitas tentativas. Aguarde um pouco e tente de novo.')
      else setErro('Não foi possível enviar agora. Verifique sua conexão.')
    }
    setEnviando(false)
  }

  return (
    <View style={styles.screen}>
      {/* imagem do fundo */}
      <ImageBackground
        source={require('../assets/fundo.png')}
        style={styles.background}
        resizeMode="cover"

      >
        {/* Cabeçalho */}
        <View style={{ alignSelf: 'center', marginTop: 90, marginBottom: 110 }}>
          <Text style={styles.textPrincipal}>Recuperar Senha</Text>
        </View>
        {/* Card */}
        <View style={styles.box1}>
          {/* Titulo */}
          <View style={{ width: '90%', alignItems: 'center', }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', width: '90%', }}>
              <TouchableOpacity
                style={{ alignSelf: 'flex-start', marginRight: 22, }}
                onPress={() => navigation.navigate('Login')}
              >
                <MaterialIcons name="arrow-back-ios-new" size={24} color="white" />
              </TouchableOpacity>
              <Text style={styles.textBox1}>Recuperar Senha</Text>
            </View>
          </View>
          {/* Informações*/}
          <TextInput
            style={styles.boxTextInput}
            placeholder='E-mail da sua conta'
            placeholderTextColor="#6C757D"
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
            keyboardType="email-address"
          />
          {!!erro && <Text style={{ color: '#FFE0E0', fontFamily: 'NunitoBold', fontSize: 14, textAlign: 'center', paddingHorizontal: 20 }}>{erro}</Text>}
          {/* Botão */}
          <TouchableOpacity style={styles.bottom} onPress={enviar} disabled={enviando}>
            {enviando ? <ActivityIndicator color="#fff" /> : <Text style={styles.textBottom}>Enviar link</Text>}
          </TouchableOpacity>

          <Image
            source={require('../assets/flor.svg')}
            style={{ bottom: -20, left: -20, position: 'absolute' }}
          />
          <Image
            source={require('../assets/folhaLeft.svg')}
            style={{ top: 10, right: -20, position: 'absolute' }}
          />
          <Image
            source={require('../assets/folhaLeft3.svg')}
            style={{ top: 160, left: -45, position: 'absolute' }}
          />
          <Image
            source={require('../assets/folhaRight.svg')}
            style={{ top: 35, left: -15, position: 'absolute' }}
          />
          <Image
            source={require('../assets/folhaRight2.svg')}
            style={{ top: -40, left: -20, position: 'absolute' }}
          />
          <Image
            source={require('../assets/recicle.svg')}
            style={{ bottom: -15, position: 'absolute', right: -5 }}
          />
        </View>
      </ImageBackground>

    </View>
  )
}
const styles = StyleSheet.create({
  //Tela geral
  background: {
    flex: 1,
    width: '100%',
    height: '100%'
  },
  screen: {
    flex: 1,
  },
  textPrincipal: {
    fontFamily: 'NunitoBold',
    fontSize: 30,
    color: 'black',
  },
  //Card
  box1: {
    backgroundColor: '#198155',
    width: '90%',
    height: '40%',
    alignItems: 'center',
    justifyContent: 'space-between',
    alignSelf: 'center',
    margin: 25,
    paddingVertical: 60,
    borderTopLeftRadius: 75,
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 75
  },
  textBox1: {
    fontFamily: 'NunitoBold',
    fontSize: 25,
    color: '#E3E6DC'
  },
  boxTextInput: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 8,
    width: '90%',
    height: 45,
    fontSize: 17,
    fontFamily: 'Nunito'
  },
  //Botão
  bottom: {
    backgroundColor: "#23C16B",
    borderRadius: 10,
    width: '90%',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20
  },
  textBottom: {
    fontFamily: 'Nunito',
    fontSize: 20,
    color: '#ffff',
  }
})