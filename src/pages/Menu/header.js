import React from 'react';
import { View, Text, Button, StyleSheet,TouchableOpacity,Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function header() {
    const navigation = useNavigation();

  return ( 
    <View style={styles.container}>
            <TouchableOpacity 
                style={styles.logo} 
                onPress={() => navigation.navigate('Home')} 
            >
                <Image style={styles.img} source={require('./../../../assets/buscasus.png')} />
            </TouchableOpacity>

            <View style={styles.nome}>
                <Text style={styles.text}>Nome da Pessoa</Text>
            </View>

            <TouchableOpacity  
                style={styles.notific} 
                onPress={() => navigation.navigate('Notificacao')} 
            >
                <Image style={styles.img} source={require('./../../../assets/iconeNotificacao.png')} />
            </TouchableOpacity>
     
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    height: 60, 
    backgroundColor: 'transparent', 
    paddingHorizontal: 10,
    position: 'absolute',
    top: 0, 
    elevation: 0, 
    zIndex: 10,
    marginTop:40,

  },
  logo:{
    justifyContent: 'center',
    alignItems: 'center',
    width: '30%', 
    
  },
  nome:{
    justifyContent: 'center',
    alignItems: 'center',
    width: '50%', 
    left:-20,
    right:0,
  },
  text:{
    marginTop:12,
    fontSize:17,
    width: '100%',
    textAlign: 'center',
    fontWeight:'600',
    color:'black', //a cor nao vai so fica preta ou branca!
},
  notific:{
    justifyContent: 'center',
    alignItems: 'center',
    width: '20%', 
    
  },
  img: {
    width: '100%',
    height: '100%',
  },
 
});

