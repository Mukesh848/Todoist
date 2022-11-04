import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import Navigationstrings from './Navigationstrings';
import * as Screens from "../Screen"


const Stack = createNativeStackNavigator()
export default function Route() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={Navigationstrings.ONBOARD_SCREEN}>
        <Stack.Screen name={Navigationstrings.ONBOARD_SCREEN} component={Screens.Onboard} />
        <Stack.Screen name={Navigationstrings.SIGNUP} component={Screens.Signup} />
      </Stack.Navigator>
    </NavigationContainer>

  )
}

