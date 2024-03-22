
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import PhoneBox from './src/components/PhoneBox';
import PhoneAdd from './src/components/PhoneAdd';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="home" component={PhoneBox} />
          <Stack.Screen name="Add" component={PhoneAdd} />
        </Stack.Navigator>
      </NavigationContainer>
  )
}