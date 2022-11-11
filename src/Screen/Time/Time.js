import { View, Text, StyleSheet, FlatList, SafeAreaView, Image, TouchableOpacity, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { moderateScale, moderateScaleVertical, verticalScale } from '../../styles/responsiveSize'
import colorPath from '../../constants/colorPath'
import HeaderComp from '../../Components/HeaderComp/HeaderComp'
import imagePath from '../../constants/imagePath'


export default function Time() {
  const [image, setimg] = useState(true)
  const [mainData1, setData] = useState([])
  const [offset, setoffset] = useState(0)
  const [isloading, setloading] = useState(false)

  useEffect(() => {
    myData()
  }, [])

  const myData = async () => {
    try {
      
    const prevdata = mainData1
      const res = await axios.get(`https://dummyjson.com/products?limit=20&skip=${offset}`)
      const mainData = res?.data?.products
      const newdata = [...prevdata, ...mainData]
      setData(newdata)  
      setoffset(offset + 20)
       setloading(true)
    }
    catch (error) {
      console.log("error riased")
    }
  }

  const renderfun = ({ item }) => {
    setloading(true)
    return (
      <View style={{ margin: moderateScale(8), backgroundColor: colorPath.WHITE, padding: moderateScale(10), borderRadius: moderateScale(10), flexDirection: 'row', shadowColor: colorPath.LIGHTPURPLE, shadowRadius: 10, shadowOpacity: 1 }}>
        <View style={{ alignItems: 'center', flexWrap: 'wrap', flex: 1 }}>
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
      </View>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <HeaderComp title="Products"></HeaderComp>
     {isloading?<FlatList
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
      />:<ActivityIndicator size="large" color={colorPath.GREEN} animating={true}/>}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})