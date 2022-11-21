import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { styles } from './styles'
import imagePath from '../../constants/imagePath'
import * as Progress from 'react-native-progress';
import colorPath from '../../constants/colorPath'
import { moderateScale } from '../../styles/responsiveSize'
import { useSelector } from 'react-redux'

export default function Home({ navigation, route }) {
  const rdata = useSelector(state => state.Addreducer.userdata)
  console.log("data in home screen",rdata)

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
      <View style={styles.progressmainview}>
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
        <View style={styles.progressStyle}>
          <Progress.Circle
            size={100}
            indeterminate={false}
            color={colorPath.PURPLE}
            progress={moderateScale(0.5)}
            showsText={true}
            thickness={moderateScale(15)}
            unfilledColor={colorPath.LIGHTGREY}
            borderWidth={0}
            strokeCap="round"
          />
        </View>
      </View>
      <View>

      </View>
      <View style={styles.TimeperiodView}>
       <TouchableOpacity style={styles.Timeperiodbtn}><Text style={styles.Timeperiod}>Daily</Text></TouchableOpacity>
       <TouchableOpacity style={styles.Timeperiodbtn}><Text style={styles.Timeperiod}>Monthly</Text></TouchableOpacity>
       <TouchableOpacity style={styles.Timeperiodbtn}><Text style={styles.Timeperiod}>Weekly</Text></TouchableOpacity>
      </View>
      <View style={styles.heading}>
        <Text style={styles.headerText1}>Reminders</Text>
        <Text style={styles.headerText2}>See all</Text>
      </View>
      <View>
        <FlatList
          data={rdata}
          renderItem={renderItemfun}
        />
      </View>
    </SafeAreaView>
  )
}