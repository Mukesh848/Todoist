import { StyleSheet, Text, View,SafeAreaView ,Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import HeaderComp from '../../Components/HeaderComp/HeaderComp'
import { moderateScale } from '../../styles/responsiveSize'
import actions from '../../redux/actions'
import colorPath from '../../constants/colorPath'

export default function Itemdetails({navigation,route}) {

  const [mainData , setMainData]=useState({})

  let pid=route.params.id

  useEffect(()=>{
    Idetails()
  },[])

  const Idetails=async()=>{
    try {
      const res2 =await actions.productDetails(pid)
      console.log("data in details screen++++",res2)
      setMainData(res2)
    
    } catch (error) {
      console.log("error in product details part",error )
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <HeaderComp title="DETAILS"></HeaderComp>
        <Image source={{uri:mainData.thumbnail}} style={{width:"100%" ,height:"60%", borderRadius:moderateScale(15)}}></Image>
       <View style={{alignItems:'center',flex:1}}>
         <Text style={{fontWeight:'bold',fontSize:20,margin:10}}>{mainData.title}</Text>
        <Text style={{fontSize:15,margin:10}}>{mainData.description}</Text>
        </View>
       <View style={{flexDirection:'row',alignItems:'center',justifyContent:"center",flex:1}}>
        <View style={{alignItems:"center",flex:1,justifyContent:'center'}}>
        <Text style={{fontSize:35,color:colorPath.GREEN,fontWeight:'bold'}}>${mainData.price}</Text>
      </View >
      <View style={{alignItems:'center',justifyContent:'center',flex:1}}><Text style={{fontWeight:'bold',fontSize:20}}>Rating:{mainData.rating}</Text>
      </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
container:{
    flex:1,
    margin:moderateScale(16)
}
})