import React from 'react';
import { View, Text, Button, StyleSheet, Image, TouchableOpacity, TextInput, Textarea} from 'react-native';

const Contato = ({ navigation }) => {
  return (
    <View style={styles.container}>
      
      {/* tem que deixar com fundo transparente */}
      {/* <Image style={{width:100,height:100}} source={require('./../../../assets/contato.jpg')}/> */}
      
      <Text style={styles.title}>Contato</Text>
    <View style={[styles.header, styles.topRounded]}>
      
      <Text style={styles.headerText1}>Nome: </Text>
      <TextInput
        style={styles.input}
        placeholder="Insira o seu nome"
        keyboardType="numeric"
       
      />
      <Text style={styles.headerText2}>E-mail: </Text>
      <TextInput
        style={styles.input}
        placeholder="Insira seu E-mail"
        keyboardType="numeric"

      />
     <Text style={styles.headerText2}>Menssagem: </Text>
     <TextInput
        style={styles.inputMenssagem}
        placeholder="Insira sua menssagem"
        multiline
        numberOfLines={100}
      />
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Menu')} >
        <Text style={styles.buttonText}> ENTRAR </Text>
      </TouchableOpacity>
    
    </View>
      
      {/* <Button 
        title="Menu" 
        onPress={() => navigation.navigate('Menu')} 
      />
      <Button 
        title="Cadastro" 
        onPress={() => navigation.navigate('Cadastro')} 
      />
      <Button 
        title="Login" 
        onPress={() => navigation.navigate('Login')} 
      />
      <Button 
        title="Contato" 
        onPress={() => navigation.navigate('Contato')} 
      /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1F2B5B',
  },

  header:{
    flex: 1,
    width: '70%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E9F2F4',
  },
  topRounded: {
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
  title:{
    color: '#014063',
    fontSize: 25,
    fontWeight: 'bold',
    marginLeft: '-9rem',
    marginBottom:3,
  },

  headerText1: {
    color: '#014063',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: '-9rem',

  },
  headerText2: {
    color: '#014063',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: '-11rem',

  },
  menssagem:{

    width: 100,
    height: 100,
    marginTop:3,
  },
  linkText1: {
    color: '#014063',
    fontSize: 12,
    fontWeight: 'bold',
    marginLeft: '9rem',

  },
  linkText: {
    color: '#014063',
    fontSize: 11,
    marginTop: 2,
    fontWeight: 'bold',

  },
  input: {

    width: '90%',
    height: 40,
    borderWidth: 2,
    borderColor: '#FEFFFF',
    borderRadius: 8,
    color: '#939292',
    fontWeight: 'bold',
    fontStyle: 'italic',
    fontSize: 12,
    paddingHorizontal: 10,
    marginBottom: 10,
    backgroundColor: '#FEFFFF',
  },

  inputMenssagem: {

    width: '70%',
    height: 170,
    borderWidth: 2,
    borderColor: '#FEFFFF',
    borderRadius: 8,
    color: '#939292',
    fontWeight: 'bold',
    fontStyle: 'italic',
    fontSize: 12,
    paddingHorizontal: 10,
    marginBottom: 10,
    backgroundColor: '#FEFFFF',
  },

  button: {

    width: '60%',
    height: 40,
    backgroundColor: '#1F2B5B',
    borderRadius: 40,
    alignItems: 'center',
    marginTop: 30,
    justifyContent: 'center',

  },

  buttonText: {

    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',

  },
 
});

export default Contato;
