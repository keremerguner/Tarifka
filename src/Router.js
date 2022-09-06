import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Categories from './pages/categories';
import Meals from './pages/meals';
import Detail from './pages/detail'

const Router = () => {


  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Categories" component={Categories} options={{
          headerTintColor: 'orange',
          headerTitle: 'Categories',
          headerTitleAlign: 'center'
        }} />
        <Stack.Screen name='Meals' component={Meals} options={{
          headerTintColor: 'orange',
          headerTitle: 'Meals',
          headerTitleAlign: 'center'
        }} />
        <Stack.Screen name='Detail' component={Detail} options={{
          headerTintColor: 'orange',
          headerTitle: 'Meals',
          headerTitleAlign: 'center'
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Router;