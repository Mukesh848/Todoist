import { combineReducers } from "redux";
import products from "./products";
import { Addreducer } from "./reducer";

const appReducer = combineReducers({
    products,
    Addreducer
})

export default appReducer