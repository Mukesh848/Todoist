import { Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from "./styles"
import HeaderComp from '../../Components/HeaderComp/HeaderComp'
import Swiper from 'react-native-swiper'
import imagePath from '../../constants/imagePath'
import { SafeAreaView } from 'react-native-safe-area-context'
import ButtonComp from '../../Components/ButtonComp/ButtonComp'
import Navigationstrings from '../../Navigation/Navigationstrings'
import colorPath from '../../constants/colorPath'

export default function Onboard({ navigation, route }) {
  const onpressSignup = () => { navigation.navigate(Navigationstrings.SIGNUP) }
  const onLogin = () => { navigation.navigate(Navigationstrings.LOGIN) }
  return (
    <SafeAreaView style={styles.container}>
      <HeaderComp title="Todoist" />
      <Swiper
        style={styles.wrapper}
        showsButtons={false}
        dotStyle={styles.dotstyle}
        activeDotStyle={styles.activedotstyle}
      >
        <View style={styles.slideView}>
          <Image source={imagePath.Onboard_1}></Image>
          <Text style={styles.slideText}>Manage Tasks</Text>
        </View >
        <View style={styles.slideView}>
          <Image source={imagePath.Onboard_2}></Image>
          <Text style={{ ...styles.slideText }}>Get Remainders on time.</Text>
        </View>
        <View style={styles.slideView}>
          <Image source={imagePath.Onboard_3}></Image>
          <Text style={styles.slideText}>Prioritize wisely.</Text>
        </View>
      </Swiper>
      <View style={styles.onboardTxtview}>
        <Text>Dolore laboris veniam et consectetur qui qui do.Ut duis ex quis exercitation. Adipisicing excepteur duis in deserunt et occaecat mollit irure eiusmod ut.
        </Text>
      </View>
      <ButtonComp title="Sign Up" onPress={onpressSignup}></ButtonComp>
      <View style={styles.signnupbtnView}>
        <Text style={styles.lastLine}> Already have an account?</Text>
        <TouchableOpacity onPress={onLogin}>
          <Text style={styles.lastlinebtn}>Log in</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}
