import { View, Text, StyleSheet, FlatList, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { moderateScale, moderateScaleVertical, verticalScale } from '../../styles/responsiveSize'
import colorPath from '../../constants/colorPath'
import HeaderComp from '../../Components/HeaderComp/HeaderComp'
import imagePath from '../../constants/imagePath'


export default function Time() {
  const [image, setimg] = useState(true)
  const [mainData1, setData] = useState([])
  useEffect(() => {
    myData()

  }, [])

  const myData = async () => {
    try {
      const res = await axios.get("https://dummyjson.com/products?skip=10&limit=10")
      const mainData = res.data.products
      setData(mainData)
      console.log("my api data", mainData)
    } catch (error) {
      console.log("error riased")
    }
  }

  const renderfun = ({ item, index }) => {
    return (
      <View style={{ margin: moderateScale(16), backgroundColor: colorPath.WHITE, padding: moderateScale(10), borderRadius: moderateScale(10), flexDirection: 'row'}}>
        <View style={{alignItems:'center'}}>
          <Image source={{ uri: item.thumbnail }} style={{ height:verticalScale(150), width:moderateScale(150) , borderRadius:moderateScale(10)}}>
            </Image>
            <Text style={{marginTop:moderateScaleVertical(5)}}>{item.title}</Text>
        </View>
        <View style={{alignItems:'center',flexWrap:'wrap', margin:moderateScale(16),flex:1 ,justifyContent:'center'}}>
         
          <Text style={{fontStyle:'italic'}}>{item.description}</Text>
        </View>
     <View style={{backgroundColor:colorPath.WHITE , position:'absolute',right:moderateScale(10),top:moderateScale(5)}}>
      <Text style={{color:colorPath.GREEN ,fontWeight:'bold'}}>${item.price}</Text>
     </View>
    <TouchableOpacity onPress={()=>{setimg(!image)}}>
      <Image style={{height:30 , width:30 ,position:'absolute' ,right:10 ,bottom:5}} 
    source={image?imagePath.i_whiteheart:imagePath.i_redheart}></Image>
    </TouchableOpacity>
    </View>
    )
  }
  // axios.get("https://dummyjson.com/products/1").then((res)=>{
  //   console.log("api response",res)
  // }).catch((error)=>{
  //   console.log("error raised in api",error)
  // })

  return (
    <SafeAreaView style={styles.container}>
      <HeaderComp title="Products"></HeaderComp>
      <FlatList
        data={mainData1}
        renderItem={renderfun}
        onEndReached={(props) => {
          // alert("this is the end of the flatlist")
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