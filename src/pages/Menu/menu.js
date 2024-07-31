import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Menu = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Menu</Text>
      
      <Button 
        title="Login" 
        onPress={() => navigation.navigate('Login')} 
      />
      <Button 
        title="Cadastro" 
        onPress={() => navigation.navigate('Cadastro')} 
      />
      <Button 
        title="Splash" 
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

export default Menu;
