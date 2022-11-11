import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Navigationstrings from './Navigationstrings';
import * as Screens from "../Screen"
import { moderateScale, verticalScale, moderateScaleVertical } from '../styles/responsiveSize';
import imagePath from '../constants/imagePath';
import colorPath from '../constants/colorPath';


export default function BottomTabs() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator screenOptions={styles.container}>
      <Tab.Screen options={{
        tabBarIcon: ({ route, focused }) => {
          return (
            <Image style={{ tintColor: focused ? colorPath.PURPLE : null }} source={imagePath.i_home} />
          )
        }
      }}
        name={Navigationstrings.HOME} component={Screens.Home} >
      </Tab.Screen>
      <Tab.Screen options={{
        tabBarIcon: ({ route, focused }) => {
          return (
            <Image style={{ tintColor: focused ? colorPath.PURPLE : null }} source={imagePath.i_time} />
          )
        }
      }} name={Navigationstrings.TIME} component={Screens.Time} />
      <Tab.Screen options={{
        tabBarIconStyle: styles.add_icon,
        tabBarStyle: { display: 'none' },
        tabBarIcon: ({ route, focused }) => {
          return (
            <Image source={imagePath.i_group} />
          )
        }
      }} name={Navigationstrings.ADD_TASK} component={Screens.Addtask} />
      <Tab.Screen options={{
        tabBarIcon: ({ route, focused }) => {
          return (
            <Image style={{ tintColor: focused ? colorPath.PURPLE : null }} source={imagePath.i_calender} />
          )
        }
      }} name={Navigationstrings.CALENDER} component={Screens.Calender} />
      <Tab.Screen options={{
        tabBarIcon: ({ route, focused }) => {
          return (
            <Image style={{ tintColor: focused ? colorPath.PURPLE : null }} source={imagePath.i_account} />
          )
        }
      }} name={Navigationstrings.PROFILE} component={Screens.Profile} />
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create(
  {
    container: {
      headerShown: false,
      tabBarShowLabel: false,
      tabBarStyle: {
        position: 'absolute',
        bottom: moderateScaleVertical(20),
        borderRadius: moderateScale(10),
        height: moderateScaleVertical(60),
        marginHorizontal: moderateScale(24),
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: moderateScale(26)
      }
    },
    add_icon: {
      position: 'absolute',
      bottom: moderateScale(20)
    }
  }
)