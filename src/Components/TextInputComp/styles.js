import { moderateScale } from "../../styles/responsiveSize";
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
        borderWidth:0.15,
        borderRadius:moderateScale(10),
    }
});