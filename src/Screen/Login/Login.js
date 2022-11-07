import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import HeaderComp from '../../Components/HeaderComp/HeaderComp'
import { styles } from './styles'
import TextInputComp from '../../Components/TextInputComp/TextInputComp'
import ButtonComp from '../../Components/ButtonComp/ButtonComp'
import Navigationstrings from '../../Navigation/Navigationstrings'


export default function Login({ navigation, route }) {
    const [email, setmail] = useState('')
    const [pass, setpass] = useState('')
    const onSignup = () => { navigation.navigate(Navigationstrings.SIGNUP) }

    return (
        <SafeAreaView style={styles.conatiner}>
            <HeaderComp title="Todoist"></HeaderComp>
            <View style={styles.txtInputView}>
                <Text style={styles.signUptxt}>Login </Text>
                <TextInputComp
                    value={email}
                    placeholder="E-mail Address"
                    onChangeText={(val) => { setmail(val) }} />
                <TextInputComp
                    value={pass}
                    placeholder="Password"
                    onChangeText={(val) => { setpass(val) }} />
                <Text style={styles.forgetText}>Forget Password</Text>
            </View>
            <ButtonComp title="Log in" onPress={()=>{navigation.navigate(Navigationstrings.HOME)}}></ButtonComp>
            <View style={styles.signnupbtnView}>
                <Text style={styles.lastLine}> Dont't have an account?</Text>
                <TouchableOpacity onPress={onSignup}>
                    <Text style={styles.lastlinebtn}>Sign Up</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}