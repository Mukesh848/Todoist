import { StyleSheet } from "react-native";
import colorPath from "../../constants/colorPath";
import { moderateScale } from "../../styles/responsiveSize";

export const styles = StyleSheet.create({
    btnStyle:{
        margin:moderateScale(16),
        backgroundColor:colorPath.PURPLE,
        alignItems:'center',
        justifyContent:'center',
        height:moderateScale(40),
        borderRadius:moderateScale(10)
    },
    btnTxt:{
        color:colorPath.WHITE,
        fontWeight:"bold"
    }
});