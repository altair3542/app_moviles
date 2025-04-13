// Crea una pantalla con:
// Foto de perfil (Image)
// Nombre (Text)
// Descripción breve (Text)
// Botón Contactar (Button) que muestre un alert.
// Botón que va a linkear con linkedin aya sea por medio de navegador o directamente desde la app nativa en android... deberia funcionar tambien en ios
import { View, Text, Image, StyleSheet, Button, Alert, Linking, SafeAreaView } from 'react-native'

export default function App() {

  //constante que va a manejar la url de el perfil de linkedin al que quiero ir.

  const linkedInURL = 'https://www.linkedin.com/in/smserna/'

  //funcion para abrir linkedin cuando se pulse un botón.
  const handleOpenLinkedIn = async () => {
    // verificamos primero si el dispositivo puede avrir la url
    const supported = await Linking.canOpenURL(linkedInURL)

    if (supported)  {
      await Linking.openURL(linkedInURL);
    } else {
      Alert.alert('Error', 'No se puedo abrir el enlace a LinkedIn')
    }
  }

 return (
  <SafeAreaView style ={styles.card}>
    <Image
      source={{ uri:'https://media.licdn.com/dms/image/v2/D4E03AQHG315E_wMLZw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1666358438419?e=1750291200&v=beta&t=fuXf7mdbZWTbhS7hgXtMhAa4NnbMbK1la7HTd55SkSI' }}
      style={styles.avatar}
    />
    <Text style={styles.name}>Santiago Mesa Serna</Text>
    <Text style={styles.bio}>Desarrollador fullStack apasionado por el backend.</Text>

    <View style={styles.buttonGroup}>
      <Button title="Contactar" onPress={() => alert ('holi') }/>
      <View style={{ height: 8 }}/>
      <Button title="LinkedIn" onPress={handleOpenLinkedIn}/>

    </View>
  </SafeAreaView>
 )
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: 24
  },
  avatar: {
    width: 140,
    height: 140,
    borderRadius: 70,
    marginBottom: 16
  },
  name: {
    fontSize: 22,
    fontWeight: '600'
  },
  bio: {
    fontSize: 16,
    textAlign: 'center',
    color: '#777',
    marginVertical: 16
  },
  buttonGroup: {
    marginTop: 12,
    width: 160,
  }
})
