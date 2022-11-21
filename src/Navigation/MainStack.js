
import React from 'react'
import Navigationstrings from './Navigationstrings'
import * as Screens from "../Screen"

// export default function MainStack(Stack) {
//   return 
//   (
//     <>
//       <Stack.Screen name={Navigationstrings.BTABS} component={Screens.Bottomtabs}/>
//       <Stack.Screen name={Navigationstrings.IDETAILS} component={Screens.Itemdetails}/>
//     </>
//   )
// }

export default function MainStack(Stack){
  return(
    <>
    <Stack.Screen name={Navigationstrings.BTABS} component={Screens.Bottomtabs}></Stack.Screen>
    <Stack.Screen name={Navigationstrings.IDETAILS} component={Screens.Itemdetails}></Stack.Screen>
    </>
  )
}
