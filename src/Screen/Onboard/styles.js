import { StyleSheet } from "react-native"
import colorPath from "../../constants/colorPath"
import { height, moderateScale, moderateScaleVertical, textScale } from "../../styles/responsiveSize"

export const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
        },
        wrapper: {},
        slide2: { 
            marginTop: moderateScaleVertical(11) 
        },
        slideView:{
            marginTop:moderateScale(10)
        },
        slideText: {
            color: colorPath.PURPLE,
            fontSize: textScale(23),
            marginTop: moderateScaleVertical(45),
            marginHorizontal: moderateScale(16),
            fontWeight: "bold"
        },
        onboardTxtview: {
            height: moderateScale(90),
            marginHorizontal: moderateScale(16),
            justifyContent: 'center'
        },
        signnupbtnView: {
            flexDirection: 'row',
            margin: moderateScale(10),
            alignItems: 'center',
            justifyContent: 'center'
        },
        lastLine:{
            color:colorPath.GREY
        },
        lastlinebtn:{
            color:colorPath.PURPLE,
             fontWeight:'bold'
            }

        
    })