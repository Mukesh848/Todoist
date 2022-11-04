import { View, Text } from 'react-native'
import React from 'react'
import { styles } from './styles'

export default function HeaderComp(
{    title,
    textStyle,
    headerStyle}
) {
  return (
    <View style={{...styles.container,...headerStyle}}>
      <Text style={{...styles.headerText,...textStyle}}>{title}</Text>
    </View>
  )
}