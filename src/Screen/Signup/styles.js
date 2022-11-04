import { StyleSheet } from "react-native";
import colorPath from "../../constants/colorPath";
import { moderateScale, moderateScaleVertical, textScale } from "../../styles/responsiveSize";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colorPath.LIGHTGREY,

    },
    txtInputView: {
        marginHorizontal: moderateScale(16),
        marginBottom: moderateScaleVertical(15)
    },
    signUptxt: {
        color: colorPath.PURPLE,
        fontSize: moderateScale(25),
        fontWeight: "bold"
    },
    forgetPass: {
        color: colorPath.GREY,
        fontSize: textScale(11),
        fontWeight: 'bold',
        position: 'absolute',
        right: moderateScale(10),
        top: moderateScale(270)
    },
    txtStyle:
        { padding: 15 },
    signinOptions:
    {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginHorizontal: moderateScale(16),
        padding: moderateScale(10)
    },
    signnupbtnView: {
        flexDirection: 'row',
        margin: moderateScale(10),
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: moderateScale(110)
    },
    lastLine: {
        color: colorPath.GREY
    },
    lastlinebtn: {
        color: colorPath.PURPLE,
        fontWeight: 'bold'
    }
});