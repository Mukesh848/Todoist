import { moderateScale, verticalScale } from "../../styles/responsiveSize";
import { StyleSheet } from "react-native";
import colorPath from "../../constants/colorPath";

export const styles = StyleSheet.create({
    txtInput:{
        width:"100%",
        height:moderateScale(40),
        marginTop:moderateScale(10),
        marginBottom:moderateScale(10),
        backgroundColor:colorPath.WHITE,
        padding:moderateScale(14),
        borderRadius:moderateScale(10),
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
    },
    imgstyle:{
        height:verticalScale(20),
        width:moderateScale(20),
        tintColor:colorPath.GREY
    },
    txtInputst:{
        flex:1,
        height:verticalScale(40)}
});