import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import Cadastro from './src/pages/cadastro/cadastro';
import Login from './src/pages/Login/login';
import Car from './src/pages/Home/carrossel';
import Splash from './src/pages/splash/splash';
import Contato from './src/pages/Contato/contato';
import Perfil from './src/pages/Perfil/perfil';
import Home from './src/pages/Home/home';



const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Cadastro" component={Cadastro} options={{ headerShown: false }}/>
        <Stack.Screen name="Login" component={Login}  options={{ headerShown: false }} />
        <Stack.Screen name="Car" component={Car} />
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Contato" component={Contato} options={{ headerShown: false }}/>
        <Stack.Screen name="Perfil" component={Perfil} options={{ headerShown: false }}/>
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}
