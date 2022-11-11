import { StyleSheet } from "react-native";
import colorPath from "../../constants/colorPath";
import { moderateScale, moderateScaleVertical, verticalScale, width } from "../../styles/responsiveSize";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colorPath.LIGHTGREY
    },
    headerView: {
        margin: moderateScale(16)
    },
    headerText1: {
        paddingTop: moderateScaleVertical(10),
        fontWeight: 'bold'
    },
    headerText2: {
        paddingTop: moderateScaleVertical(10),
        color: colorPath.GREY
    },
    taskCompleted: {
        backgroundColor: colorPath.WHITE,
        height: moderateScale(150),
        borderRadius: moderateScale(10),
        marginHorizontal: moderateScale(16),
        padding: moderateScale(16)
    },
    taskComptext: {
        color: colorPath.BLUE,
        fontWeight: 'bold'
    },
    tickimg: {
        paddingTop: moderateScale(20),
        flexDirection: 'row'
    },
    taskComptext2: {
        color: colorPath.GREEN,
        fontWeight: 'bold'
    },
    taskComptext3: {
        color: colorPath.GREY
    },
    viewtaskbtn: {
        marginTop: moderateScale(20),
        backgroundColor: colorPath.PURPLE,
        alignItems: 'center',
        justifyContent: 'center',
        height: moderateScale(30),
        borderRadius: moderateScale(5),
        width: moderateScale(150)
    },
    viewtaskbtntxt: {
        color: colorPath.WHITE,
        fontWeight: "bold"
    },
    dockView: {
        flex: 1,
        justifyContent: 'flex-end',
        marginHorizontal: moderateScale(16),
        marginTop: moderateScaleVertical(16)
    },
    dock: {
        backgroundColor: colorPath.WHITE,
        height: moderateScale(60),
        borderRadius: moderateScale(5),
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    indock: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    dockicon: {
        justifyContent: 'center'
    },
    Timeperiod: {
        color: colorPath.GREY
    },
    TimeperiodView: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginHorizontal: moderateScale(16),
        marginTop: verticalScale(16),
        height: moderateScale(30),
        alignItems: 'center',
    },
    heading: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: moderateScale(16),
    },
    groupbtn: {
        position: 'absolute',
        bottom: moderateScale(60),
        right: moderateScale(160)
    },
    flatview: {
        marginTop: verticalScale(20),
        padding: moderateScale(20),
        backgroundColor: colorPath.WHITE,
        borderRadius: moderateScale(10),
        marginHorizontal: moderateScale(16)
    },
    flatText: {
        color: colorPath.PURPLE,
        fontWeight: 'bold'
    },
    progressStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    progressmainview: {
        flexDirection: 'row',
        backgroundColor: colorPath.WHITE,
        margin: moderateScale(16)
    },
    Timeperiodbtn:{
    }
});