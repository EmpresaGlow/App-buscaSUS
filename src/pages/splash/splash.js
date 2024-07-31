import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Splash = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Slash</Text>
      
      <Button 
        title="Login" 
        onPress={() => navigation.navigate('Login')} 
      />
      <Button 
        title="Cadastro" 
        onPress={() => navigation.navigate('Cadastro')} 
      />
      <Button 
        title="Menu" 
        onPress={() => navigation.navigate('Menu')} 
      />
       <Button 
        title="Caso" 
        onPress={() => navigation.navigate('Caso1')} 
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

export default Splash;
