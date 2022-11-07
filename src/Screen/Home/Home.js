import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { styles } from './styles'
import imagePath from '../../constants/imagePath'
import Navigationstrings from '../../Navigation/Navigationstrings'

export default function Home({ navigation, route }) {

  const [data, setdata] = useState([])
  const fetchdata = () => {
    const paramdata = route.params
    if (!!paramdata) { setdata(paramdata) }
  }
  useEffect(() => {
    fetchdata()
  }, [route?.params])

  const renderItemfun = ({ item, index }) => {
    return (
      <View style={styles.flatview}>
        <Text style={styles.flatText}>{item.title}</Text>
        <Text style={styles.flatText}>{item.notes}</Text>
      </View>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerView}>
        <Text style={styles.headerText1}>Hello Lorem !</Text>
        <Text style={styles.headerText2}>Let's start with todays tasks.</Text>
      </View>
      <View style={styles.taskCompleted}>
        <Text style={styles.taskComptext}>Daily Tasks</Text>
        <View style={styles.tickimg}>
          <Image source={imagePath.i_tick} ></Image>
          <Text style={styles.taskComptext2} > 5/10</Text>
          <Text style={styles.taskComptext3} > Tasks completed</Text>
          
        </View>
        <TouchableOpacity style={styles.viewtaskbtn}>
          <Text style={styles.viewtaskbtntxt}>View Tasks</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.TimeperiodView}>
        <Text style={styles.Timeperiod}>Daily</Text>
        <Text style={styles.Timeperiod}>Monthly</Text>
        <Text style={styles.Timeperiod}>Weekly</Text>
      </View>
      <View style={styles.heading}>
        <Text style={styles.headerText1}>Reminders</Text>
        <Text style={styles.headerText2}>See all</Text>
      </View>
      <View>
        <FlatList
          data={data}
          renderItem={renderItemfun}
        />
      </View>
      <View style={styles.dockView}>
        <View style={styles.dock}>
          <View style={styles.indock}>
            <TouchableOpacity style={styles.dockicon}><Image source={imagePath.i_home}></Image></TouchableOpacity>
            <TouchableOpacity style={styles.dockicon}><Image source={imagePath.i_time}></Image></TouchableOpacity>
          </View>
          <View style={styles.indock}>
            <TouchableOpacity style={styles.dockicon}><Image source={imagePath.i_calender}></Image></TouchableOpacity>
            <TouchableOpacity style={styles.dockicon}><Image source={imagePath.i_account}></Image></TouchableOpacity>
          </View>
        </View>
      </View>
      <TouchableOpacity style={styles.groupbtn}
        onPress={() => { navigation.navigate(Navigationstrings.ADD_TASK, data) }}><Image source={imagePath.i_group} /></TouchableOpacity>
    </SafeAreaView>
  )
}