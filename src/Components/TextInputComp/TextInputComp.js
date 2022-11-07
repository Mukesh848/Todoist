import { View, Text, TextInput, Image, TouchableOpacity} from 'react-native'
import React from 'react'
import colorPath from '../../constants/colorPath'
import { styles } from './styles'

export default function TextInputComp(
    {
        value,
        placeholder,
        txtInputStyle,
        onChangeText=()=>{},
        secureTextEntry,
        img
    }
) {
  return (
    <View style={{...styles.txtInput,...txtInputStyle}}>
      <TextInput 
      style={{flex:1,height:40}}
      value={value} 
      placeholder={placeholder}
      placeholderColor={colorPath.GREY}
      onChangeText={onChangeText}
      secureTextEntry={secureTextEntry}>
      </TextInput>
      <TouchableOpacity><Image source={img} style={{height:20,width:20,tintColor:colorPath.GREY}}></Image></TouchableOpacity>
    </View>
  )
}