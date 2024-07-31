import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Login = ({ navigation }) => {
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

export default Login;
