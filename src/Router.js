import React from 'react'
import { SafeAreaView, View, Text, Button } from 'react-native'
import axios from 'axios'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Categories from './pages/categories';

const Router = () => {



  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Categories" component={Categories} />
    </Stack.Navigator>
  </NavigationContainer>
  )
}

export default Router;