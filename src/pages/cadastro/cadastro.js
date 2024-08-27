import React from 'react';
import { View, Text, Button, StyleSheet, Image, TextInput, TouchableOpacity} from 'react-native';

const Cadastro = ({ navigation }) => {
  return (
    <View style={styles.container}>

        {/* <Image style={{width:100,height:100}}source={require('./../../../assets/cadastro.jpg')}/> */}

          <Text style={styles.title}>Cadastro</Text>

        <View style={[styles.header, styles.topRounded]}>
      <Text style={styles.headerText1}> Nome Completo : </Text>
      <TextInput
        style={styles.input}
        placeholder="Insira o Nome"
        keyboardType="string"
      />

      <Text style={styles.headerText1}> Nome de Usuário: </Text>
      <TextInput
        style={styles.input}
        placeholder="Insira o Nome de Usuário"
        keyboardType="string"
      />

      <Text style={styles.headerText1}> CPF : </Text>
      <TextInput
        style={styles.input}
        placeholder="Insira o CPF"
        keyboardType="numeric"
      />

      <Text style={styles.headerText1}> CNS: </Text>
      <TextInput
        style={styles.input}
        placeholder="Insira o CNS"
        keyboardType="numeric"
      />
    
    <Text style={styles.headerText1}> CEP : </Text>
      <TextInput
        style={styles.input}
        placeholder="Insira o CEP"
        keyboardType="numeric"
      />

      <Text style={styles.headerText1}> Senha : </Text>
      <TextInput
        style={styles.input}
        placeholder="Insira a Senha"
        keyboardType="string"
      />
      
      <Text style={styles.headerText1}> Confirmar Senha : </Text>
      <TextInput
        style={styles.input}
        placeholder="Confirmar Senha"
        keyboardType="string"
      />
      {/* <Text style={styles.headerText2}> SENHA :</Text>
      <TextInput
        style={styles.input}
        placeholder="Insira sua Senha"
        secureTextEntry={true} 
      /> */}
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Car')} >
        <Text style={styles.buttonText}> CADASTRAR </Text>
      </TouchableOpacity>
    </View>
  </View>
);
};
    

    {/* <Button style={styles.buttonMenu}
      title="Menu" 
      onPress={() => navigation.navigate('Menu')} 
    />
    <Button style={styles.buttonMenu}
      title="Cadastro" 
      onPress={() => navigation.navigate('Cadastro')} 
    />
    <Button style={styles.buttonMenu}
      title="Splah" 
      onPress={() => navigation.navigate('Splash')} 
    />
    <Button style={styles.buttonMenu}
      title="Caso" 
      onPress={() => navigation.navigate('Caso1')} 
    /> */}


const styles = StyleSheet.create({
container: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#A6E4F6',
},
imagem:{
 width:'100%',
 height:'25%',
},
buttonMenu:{
  justifyContent:'space-around',
},

header:{
  //cor da caixa 
  flex: 1,
  width: '70%',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#E9F2F4',
},
topRounded: {
  //deixa as pontas redondas 
  borderTopLeftRadius: 50,
  borderTopRightRadius: 50,
},
headerText1: {
  //cns
  color: '#014063',
  fontSize: 16,
  fontWeight: 'bold',
  marginLeft: '-9rem',

},
headerText2: {
  //senha
  color: '#014063',
  fontSize: 16,
  fontWeight: 'bold',
  marginLeft: '-11rem',

},
linkText1: {
  //esqueceu a senha
  color: '#014063',
  fontSize: 12,
  fontWeight: 'bold',
  marginLeft: '9rem',

},
linkText: {
  //nao tem conta
  color: '#014063',
  fontSize: 11,
  marginTop: 2,
  fontWeight: 'bold',

},
input: {
//parte de dentro da caixa
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
//botao entrar
  width: '60%',
  height: 40,
  backgroundColor: '#1F2B5B',
  borderRadius: 40,
  alignItems: 'center',
  marginTop: 30,
  justifyContent: 'center',

},

buttonText: {
//letra do botao
  color: '#fff',
  fontSize: 18,
  fontWeight: 'bold',

},
});


export default Cadastro;
