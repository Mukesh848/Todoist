import { View, Text, StyleSheet, FlatList, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import { moderateScale, moderateScaleVertical, verticalScale } from '../../styles/responsiveSize'

import colorPath from '../../constants/colorPath'
import imagePath from '../../constants/imagePath'
import Navigationstrings from '../../Navigation/Navigationstrings'

import HeaderComp from '../../Components/HeaderComp/HeaderComp'
import actions from '../../redux/actions'
import axios from 'axios'


export default function Time({ navigation, route }) {
  const [image, setimg] = useState(true)
  const [mainData1, setData] = useState([])
  const [offset, setoffset] = useState(0)

  let homeData = useSelector(state => state.products)
  console.log("homeDatahomeDatahomeData", homeData)
  useEffect(() => {
    myData()
  }, [])
  const myData = async () => {
    try {
      if (offset === 100) {
        return;
      }
      const prevdata = mainData1
     
      // axios.interceptors.request.use(config=>{
      //   console.log(`${config.method} request is sent to ${config.url}`)
      //   return config;
      // },function(error){
      //   return Promise.reject(error)
      // })
     
      const res = await actions.homeProducts(`?limit=20&skip=${offset}`)
      // const res= await axios.get(`https://dummyjson.com/products`)
      // const res = await axios({
      //   method:'get',
      //   url:`https://dummyjson.com/products`,
      //   params:{
      //     limit:20
      //   }
      // })
      // const res = await axios({
      //     method:'delete',
      //     url:`https://dummyjson.com/products/1`,
      //   })
  
      console.log("resresresresresres", res)
      const mainData = res?.products
      const newdata = [...prevdata, ...mainData]
      console.log("data merged ", newdata)
      setData(newdata)
      setoffset(offset + 20)
    }
    catch (error) {
      console.log("error raised")
    }
  }
  const onCLickItem = (item) => { navigation.navigate(Navigationstrings.IDETAILS, { id: item.id }) }
  const renderfun = ({ item }) => {
    return (
      <TouchableOpacity style={{ margin: moderateScale(8), backgroundColor: colorPath.WHITE, padding: moderateScale(10), borderRadius: moderateScale(10), flexDirection: 'row', shadowColor: colorPath.LIGHTPURPLE, shadowRadius: 10, shadowOpacity: 1 }} onPress={() => onCLickItem(item)} >
        <View style={{ alignItems: 'center', flexWrap: 'wrap', flex: 1, flexDirection: 'column' }}>
          <Image source={{ uri: item.thumbnail }} style={{ height: verticalScale(80), width: moderateScale(100), borderRadius: moderateScale(10) }}>
          </Image>
          <Text style={{ marginTop: moderateScaleVertical(5), fontWeight: 'bold' }}>{item.title}</Text>
        </View>
        <View style={{ alignItems: 'center', flexWrap: 'wrap', margin: moderateScale(16), flex: 1, justifyContent: 'center' }}>
          <Text style={{ fontStyle: 'italic' }}>{item.description}</Text>
        </View>
        <View style={{ backgroundColor: colorPath.WHITE, position: 'absolute', right: moderateScale(10), top: moderateScale(5) }}>
          <Text style={{ color: colorPath.GREEN, fontWeight: 'bold' }}>${item.price}</Text>
        </View>
        <TouchableOpacity onPress={() => { setimg(!image) }}>
          <Image style={{ height: 30, width: 30, position: 'absolute', right: 10, bottom: 5 }}
            source={image ? imagePath.i_whiteheart : imagePath.i_redheart}></Image>
        </TouchableOpacity>
      </TouchableOpacity>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <HeaderComp title="Products"></HeaderComp>
      <FlatList
        data={mainData1}
        renderItem={renderfun}
        ListFooterComponent={() => {
          return (
            <View style={{ alignItems: "center", }}>
              <Text style={{ fontWeight: 'bold' }}>no more products in the list</Text>
            </View>)
        }}
        onEndReached={() => {
          myData()
        }}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})