import {StyleSheet, Text, TextInput, View} from 'react-native';

import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.navBar}>
        <Text style={styles.brandName}>viewStar</Text>
      </View>
      <View style={styles.presentacion}>
        <View>
          <Text style={styles.mensaje_principal}>¿Quiénes somos?</Text>
          {/* <Image url='https://cdn2.mediotiempo.com/uploads/media/2019/01/01/varias-cintas-son-esperadas-para.jpg'></Image> */}
        </View>
        <Text>Somos proveedores de entretenimiento que buscan compartir su amor por las películas con todo el mundo.</Text>
      </View>

      <Text style={styles.mensaje_principal}>Buy your Movies!</Text>
      <Text style={styles.mensaje_principal}>Hola Coder!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  navBar: {
    flex: 1,
    backgroundColor: '#A901DB',
    marginTop: 30,
    width: 395,
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  brandName: {
    fontSize: 20,
    marginTop: 10,
    marginBottom: 10,
  },
  mensaje_principal: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    color: '#fff'
  },
  presentacion: {
    flex: 6,
    flexDirection: 'row',
  },
});
