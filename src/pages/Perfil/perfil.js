import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Perfil = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Perfil</Text>
      
      <Button 
        title="Login" 
        onPress={() => navigation.navigate('Login')} 
      />
      <Button 
        title="Cadastro" 
        onPress={() => navigation.navigate('Cadastro')} 
      />
      {/* <Button 
        title="Splash" 
        onPress={() => navigation.navigate('Splash')} 
      /> */}
      <Button 
        title="Contato" 
        onPress={() => navigation.navigate('Contato')} 
      />
       <Button 
        title="Home" 
        onPress={() => navigation.navigate('Home')} 
      />
     
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Perfil;
