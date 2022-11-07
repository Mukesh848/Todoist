import { StyleSheet } from "react-native";
import colorPath from "../../constants/colorPath";
import { moderateScale, moderateScaleVertical ,textScale } from "../../styles/responsiveSize";



export const styles = StyleSheet.create({
    conatiner:{flex:1,
        backgroundColor: colorPath.LIGHTGREY},
    txtInputView: {
        marginHorizontal: moderateScale(16),
        marginBottom: moderateScaleVertical(15)
    },
    signUptxt: {
        color: colorPath.PURPLE,
        fontSize: moderateScale(25),
        fontWeight: "bold",
        marginBottom:moderateScaleVertical(10)
    },
    forgetText:{
        color:colorPath.GREY,
        fontSize: textScale(11),
        fontWeight: 'bold',
        position: 'absolute',
        right: moderateScale(10),
        top:moderateScale(155)
    },
    signnupbtnView: {
        flex:1,
        flexDirection: 'row',
        margin: moderateScale(10),
       alignItems:'flex-end',
    //    backgroundColor:'red',
        justifyContent: 'center',
        // marginTop:moderateScaleVertical(370)
    },
    lastLine: {
        color: colorPath.GREY
    },
    lastlinebtn: {
        color: colorPath.PURPLE,
        fontWeight: 'bold'
    }
});