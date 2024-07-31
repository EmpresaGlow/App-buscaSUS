import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import Cadastro from './src/pages/cadastro/cadastro';
import Login from './src/pages/Login/login';
import Menu from './src/pages/Menu/menu';
import Splash from './src/pages/splash/splash';
import Caso1 from './src/pages/caso precise1/caso1';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Cadastro" component={Cadastro} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Menu" component={Menu} />
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Caso1" component={Caso1} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
