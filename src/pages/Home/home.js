import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

//tags de outras paginas
import Maps from './Maps/map';
import Menu from './../Menu/menu';
import NavBar from './../Menu/header';
import Car from './carrossel';


export default function Home() {

  return ( 
    <View style={styles.container}>

      {/* nav de cima */}
        <NavBar/>

      {/*Maps*/}
      <View style={styles.map}>
        <Maps/>
      </View>

      <View style={styles.carro}>
        <Car/>
      </View> 

      {/* Menu*/}
      <View style={styles.menu}>
        <Menu />
      </View>

     
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

  },
  map:{
    flex:1,
    width: '100%',
    height:'100%',
  },
  menu:{
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height:'9%',
    backgroundColor:'#fff',
    marginTop: 3,
    marginBottom:5,
  },
  carro:{
    width:'100%',
    height:'18%',
    backgroundColor: 'transparent', 
    // position: 'absolute',
    // opacity:0.1,

  }
  

  
});

