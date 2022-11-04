import { StyleSheet } from "react-native";
import colorPath from "../../constants/colorPath";
import { moderateScale, moderateScaleVertical, textScale } from "../../styles/responsiveSize";


export const styles=StyleSheet.create(
    {
        container:{
            alignItems:'center',
            padding:moderateScale(16),
            marginVertical:moderateScaleVertical(15)
        },
        headerText:{
            color:colorPath.PURPLE,
            fontSize:textScale(35),
            fontWeight:'bold'
        }
    }
)