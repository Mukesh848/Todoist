import { View, Text, TextInput } from 'react-native'
import React from 'react'
import colorPath from '../../constants/colorPath'
import { styles } from './styles'

export default function TextInputComp(
    {
        value,
        placeholder,
        txtInputStyle,
        onChangeText=()=>{}
    }
) {
  return (
    <View>
      <TextInput 
      value={value} 
      placeholder={placeholder}
      placeholderColor={colorPath.GREY}
      style={{...styles.txtInput,...txtInputStyle}}
      onChangeText={onChangeText}
      >
      </TextInput>
    </View>
  )
}