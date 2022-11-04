import { View, Text, TextInputComponent, TouchableOpacity,Image } from 'react-native'
import React, { useState } from 'react'
import { styles } from './styles'
import { SafeAreaView } from 'react-native-safe-area-context'
import HeaderComp from '../../Components/HeaderComp/HeaderComp'
import TextInputComp from '../../Components/TextInputComp/TextInputComp'
import ButtonComp from '../../Components/ButtonComp/ButtonComp'
import colorPath from '../../constants/colorPath'
import imagePath from '../../constants/imagePath'
import { moderateScale } from '../../styles/responsiveSize'


export default function Signup() {
    const [value, setval] = useState('')
    const [phone, setphone] = useState('')
    const [email, setmail] = useState('')
    const [pass, setpass] = useState('')
    return (
        <SafeAreaView style={styles.container}>
            <HeaderComp title="Todoist" />
            <View style={styles.txtInputView}>
                <Text style={styles.signUptxt}>Sign Up</Text>
                <TextInputComp
                    value={value}
                    placeholder="Name"
                    onChangeText={(val) => { setval(val) }}
                />
                <TextInputComp
                    value={phone}
                    placeholder="Phone Number"
                    onChangeText={(val) => { setphone(val) }}
                />
                <TextInputComp
                    value={email}
                    placeholder="E-mail Address"
                    onChangeText={(val) => { setmail(val) }}
                />
                <TextInputComp
                    value={pass}
                    placeholder="Password"
                    onChangeText={(val) => { setpass(val) }}
                />
                <Text style={styles.forgetPass}>Forget Password</Text>
            </View>
            <ButtonComp title="Sign Up"></ButtonComp>
            <View style={{alignItems:'center'}}>
                <Text style={styles.txtStyle}> OR </Text>
                <Text style={{...styles.txtStyle,color:colorPath.GREY}}> Signup with</Text>
            </View>
            <View style={styles.signinOptions}>
                <TouchableOpacity >
                <Image source={imagePath.i_gmail}></Image>
                </TouchableOpacity>
                <TouchableOpacity >
                <Image source={imagePath.i_apple}></Image>
                </TouchableOpacity>
                <TouchableOpacity >
                <Image source={imagePath.i_fbook}></Image>
                </TouchableOpacity>
            </View>
        <View style={styles.signnupbtnView}>
        <Text style={styles.lastLine}> Already have an account?</Text>
        <TouchableOpacity>
          <Text style={styles.lastlinebtn}>Log in</Text>
        </TouchableOpacity>
      </View>
        
        </SafeAreaView>
    )
}