import { View, Text, TextInput, Image, TouchableOpacity} from 'react-native'
import React, { useState } from 'react'
import colorPath from '../../constants/colorPath'
import { styles } from './styles'

export default function TextInputComp(
    {
        value,
        placeholder,
        txtInputStyle,
        onChangeText=()=>{},
        secureTextEntry,
        img1,
        img2,
    }
) {
const[img , setImg]=useState(true)
const[show, setShow]=useState(false)

const oniconpress=()=>{
  setImg(!img)
  setShow(!show)
}
  return (
    <View style={{...styles.txtInput,...txtInputStyle}}>
      <TextInput 
      style={styles.txtInputst}
      value={value} 
      placeholder={placeholder}
      placeholderColor={colorPath.GREY}
      onChangeText={onChangeText}
      secureTextEntry={show}>
      </TextInput>
    <TouchableOpacity onPress={oniconpress}><Image source={img?img2:img1} style={styles.imgstyle}></Image></TouchableOpacity>
    
    </View>
  )
}