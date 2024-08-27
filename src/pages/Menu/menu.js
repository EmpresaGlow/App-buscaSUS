
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Menu = () => {
  const navigation = useNavigation();
    
  // controlar a aba de animacao
  const [activeTab, setActiveTab] = useState('Home');

  // Função que define a aba ativa
  const handleTabPress = (tabName) => {
    setActiveTab(tabName);
    navigation.navigate(tabName); // Navega para a tela associada
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.Button}
        onPress={() => handleTabPress('Home')}
      >
         {activeTab === 'Home' && <View style={styles.activeIndicator} />}{/* barra de animaçao */}
        <Image style={styles.img} source={require('./../../../assets/iconeHome.png')} />
        <Text style={styles.text}>Home</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.Button}
        onPress={() => handleTabPress('BuscarPosto')}
      >
        {activeTab === 'BuscarPosto' && <View style={styles.activeIndicator} />}
        <Image style={styles.img} source={require('./../../../assets/iconeBuscarPosto.png')} />
        <Text style={styles.text}>Procurar Postos</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.ButtonPrincipal}>
        <Image style={styles.imgLogo} source={require('./../../../assets/iconeLogo.png')} />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.Button}
        onPress={() => handleTabPress('Dignidade')}
      >
        {activeTab === 'Dignidade' && <View style={styles.activeIndicator} />}
        <Image style={styles.img} source={require('./../../../assets/iconeSus.png')} />
        <Text style={styles.text}>Dignidade Menstrual</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.Button}
        onPress={() => handleTabPress('Perfil')}
      >
        {activeTab === 'Perfil' && <View style={styles.activeIndicator} />}
        <Image style={styles.img} source={require('./../../../assets/iconeHome.png')} />
        <Text style={styles.text}>Perfil</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 5,
  },
  Button: {
    flex: 5,
    margin: 3,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative', // Permite posicionar a barra de animação
  },
  ButtonPrincipal: {
    backgroundColor: '#C3CDF2',
    bottom: 30,
    padding: 35,
    borderWidth: 5,
    borderColor: '#FEFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    height: '80%',
    width: '15%',
    borderRadius: 100,
  },
  text: {
    position: 'absolute',
    bottom: 0,
    fontSize:9,
    width: '100%',
    textAlign: 'center',
    padding: 5,
    color: '#1F2B5B',
    marginTop: 10,
  },
  img: {
    width: '100%',
    height: '100%',
    marginBottom: '20%',
  },
  imgLogo: {
    width: 240,
    height: 240,
  },
  activeIndicator: {
    position: 'absolute',
    top: -5, // Posição da barra acima do ícone
    width: 40, 
    height: 4, // Altura da barra
    backgroundColor: '#1F2B5B',
    borderRadius: 2,
  },
});

export default Menu;

      {/* <Button 
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
        title="Contato" 
        onPress={() => navigation.navigate('Contato')} 
      />
       <Button 
        title="Perfil" 
        onPress={() => navigation.navigate('Perfil')} 
      />
      <Button 
        title="Home" 
        onPress={() => navigation.navigate('Home')} 
      />  */}