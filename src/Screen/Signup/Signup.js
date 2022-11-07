import { View, Text, TextInputComponent, TouchableOpacity,Image } from 'react-native'
import React, { useState } from 'react'
import { styles } from './styles'
import { SafeAreaView } from 'react-native-safe-area-context'
import HeaderComp from '../../Components/HeaderComp/HeaderComp'
import TextInputComp from '../../Components/TextInputComp/TextInputComp'
import ButtonComp from '../../Components/ButtonComp/ButtonComp'
import colorPath from '../../constants/colorPath'
import imagePath from '../../constants/imagePath'
import Navigationstrings from '../../Navigation/Navigationstrings'


export default function Signup({navigation,route}) {
    const [value, setval] = useState(null)
    const [phone, setphone] = useState(null)
    const [email, setmail] = useState(null)
    const [pass, setpass] = useState(null)
    const ondirLogin=()=>{navigation.navigate(Navigationstrings.LOGIN)}
    const onLogin=()=>{
        if(value===null){
            alert("please Enter your Name")
            return;
        }
        if(phone===null){
            alert("please Enter your Phone number")
            return;
        }
        if(email===null){
            alert("please Enter your E-mail Address")
            return;
        }
        if(pass===null){
            alert("please Enter your Password ")
            return;
        }
        if(value !==null && phone===null && email===null && pass===null)
        {navigation.navigate(Navigationstrings.LOGIN)}}
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
                    secureTextEntry={true}
                    onChangeText={(val) => { setpass(val) }}
                    img={imagePath.i_showpass}
                />

                <Text style={styles.forgetPass}>Forget Password</Text>
            </View>
            <ButtonComp title="Sign Up" onPress={onLogin}></ButtonComp>
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
        <TouchableOpacity onPress={ondirLogin}>
          <Text style={styles.lastlinebtn}>Log in</Text>
        </TouchableOpacity>
      </View>
        
        </SafeAreaView>
    )
}