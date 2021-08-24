import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, TextInput, CheckBox, Button} from 'react-native';

export default function App() {
  const [isSelected, setSelection] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.card}>
      <Image source={{uri: 'https://img2.freepng.es/20180602/zvo/kisspng-computer-icons-social-media-user-facebook-login-mystery-shopper-5b122bc3ca0775.2729057415279175078275.jpg'}}
       style={{width: 150, height: 150, borderRadius:75}} />
       <Text>Usuario usuario</Text>
       <TextInput
        placeholder="contraseña"
        style={{height:40,
          width: 270,
          margin: 12,
          borderWidth: 1,
          padding: 10,}}
          secureTextEntry={true}
      />
      <View style={styles.checkboxContainer}>
      <CheckBox
        value={isSelected}
        onValueChange={setSelection}
        style={styles.checkbox}
      />
      <Text style={{margin: 8}}>¿Recordar contraseña?</Text>
      </View>
      <Button
        title="Iniciar Sesión"
      />
      </View>
      <StatusBar style="auto" />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C9EBF5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    height: 400,
    width: 300,
    backgroundColor: '#ffff',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
  },
  checkbox: {
    alignSelf: "center",
  },
  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
});
