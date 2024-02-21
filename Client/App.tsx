/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import { NavigationContainer } from '@react-navigation/native';
import PhoneBox from './src/components/PhoneBox';
import PhoneAdd from './src/components/PhoneAdd';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={PhoneBox} />
          <Stack.Screen name="Add" component={PhoneAdd} />
        </Stack.Navigator>
      </NavigationContainer>

    </Provider>
  )
}