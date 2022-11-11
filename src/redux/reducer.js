import types from "./types";

let init_state={
    userdata:[],
    productdata:[]
}

export function Addreducer(state = init_state, action) {   
   console.log("*********",action.payload)
   
    switch (action.type) {
        case types.ADD: 
        {
        let dataaction=action.payload
        let newArr=[...state.userdata,dataaction]
        return {...state ,userdata:newArr}
        }
        default:
            return { ...state }
    }
}