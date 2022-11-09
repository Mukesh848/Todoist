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
        img1,
        img2,
        img1Press=()=>{},
        img2Press=()=>{}

    }
) {
  return (
    <View style={{...styles.txtInput,...txtInputStyle}}>
      <TextInput 
      style={styles.txtInputst}
      value={value} 
      placeholder={placeholder}
      placeholderColor={colorPath.GREY}
      onChangeText={onChangeText}
      secureTextEntry={secureTextEntry}>
      </TextInput>
    {{img1}?<TouchableOpacity><Image source={img1} style={styles.imgstyle}></Image></TouchableOpacity>
      :<TouchableOpacity><Image source={img2} style={styles.imgstyle}></Image></TouchableOpacity>}
    </View>
  )
}