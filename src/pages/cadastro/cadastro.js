import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Cadastro = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Cadastro</Text>
      
      <Button 
        title="Login" 
        onPress={() => navigation.navigate('Login')} 
      />
      <Button 
        title="Menu" 
        onPress={() => navigation.navigate('Menu')} 
      />
      <Button 
        title="Splash" 
        onPress={() => navigation.navigate('Splash')} 
      />
     
    </View>
  );
};


  

export default Cadastro;
