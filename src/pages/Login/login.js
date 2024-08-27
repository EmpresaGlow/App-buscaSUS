import React from 'react';
import { View, Text, Button, StyleSheet, Image, TouchableOpacity, TextInput} from 'react-native';

const Login = ({ navigation }) => {
  return (
    <View style={styles.container}>

      {/* <Image source={require('./../../../assets/login.png')}/> */}
      <View style={[styles.header, styles.topRounded]}>
        
        <Text style={styles.headerText1}> CNS ou CPF : </Text>
        <TextInput
          style={styles.input}
          placeholder="Insira o CNS ou CPF"
          keyboardType="numeric"
        />
        <Text style={styles.headerText2}> SENHA :</Text>
        <TextInput
          style={styles.input}
          placeholder="Insira sua Senha"
          secureTextEntry={true} 
        />
        <TouchableOpacity>
          <Text style={styles.linkText1}> Esqueceu a senha? </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')} >
          <Text style={styles.buttonText}> ENTRAR </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}>
          <Text style={styles.linkText}>Não tem conta? Cadastre-se!</Text>
        </TouchableOpacity>

      </View>
    </View>
 

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#A6E4F6',
  },

  header:{
    flex: 1,
    width: '22rem',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E9F2F4',
  },
  topRounded: {
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
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

    width: '70%',
    height: 35,
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

export default Login;
