import types from "./types"

export function addtodo(data1,data2 ){
return{
    type:types.ADD ,
    payload: 
        { title:data1,
            notes:data2
    }    
}
}
