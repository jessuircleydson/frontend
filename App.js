import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './pages/auth/login';
import Events from './pages/events';
import CreateEvent from './pages/createEvent';

const Stack = createStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login"> 
        <Stack.Screen name ="Login" component={Login} />
        <Stack.Screen name="Eventos" component={Events} />
        <Stack.Screen name="AdicionarEvento" component={CreateEvent} options={{ title: 'Adicionar Evento' }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop:40,
    flex: 1,
    backgroundColor: '#451c68',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'stretch',
    textAlign: 'center',
    
  },

});
