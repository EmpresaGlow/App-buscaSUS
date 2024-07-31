import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Caso1 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Login</Text>
      <Button 
        title="Menu" 
        onPress={() => navigation.navigate('Menu')} 
      />
      <Button 
        title="Cadastro" 
        onPress={() => navigation.navigate('Cadastro')} 
      />
      <Button 
        title="Splah" 
        onPress={() => navigation.navigate('Splash')} 
      />
       <Button 
        title="Login" 
        onPress={() => navigation.navigate('Login')} 
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

export default Caso1;
