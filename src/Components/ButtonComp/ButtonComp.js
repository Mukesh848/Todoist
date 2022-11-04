import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from './styles'

export default function ButtonComp({
    title,
    btnStyle,
    btnTxtStyle,
    onPress=()=>{}
}) {
  return (
    <View>
        <TouchableOpacity style={{...styles.btnStyle,...btnStyle}} onPress={onPress}>
            <Text style={{...styles.btnTxt,...btnTxtStyle}}>{title}</Text>
        </TouchableOpacity>
    </View>
  )
}