import { View, Text } from 'react-native'
import React from 'react'
import Navigationstrings from './Navigationstrings'
import * as Screens from "../Screen"

export default function AuthStack(Stack) {
  return (
    <>
        <Stack.Screen name={Navigationstrings.ONBOARD_SCREEN} component={Screens.Onboard} />
        <Stack.Screen name={Navigationstrings.SIGNUP} component={Screens.Signup} />
        <Stack.Screen name={Navigationstrings.LOGIN} component={Screens.Login} />
        <Stack.Screen name={Navigationstrings.ADD_TASK} component={Screens.Addtask} />
        <Stack.Screen name={Navigationstrings.BTABS} component={Screens.Bottomtabs}/>
        <Stack.Screen name={Navigationstrings.IDETAILS} component={Screens.Itemdetails}/>
    </>
  )
}