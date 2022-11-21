import { PRODUCT } from "../../config/urls"
import { apiGet } from "../../utils/utils"
import store from "../store"
import types from "../types"

export const homeProducts = (query = "") => {
    return new Promise((resolve, reject) => {
        apiGet(PRODUCT + query)
            .then((res) => {
                console.log("res in actions", res)
                store.dispatch({ type: types.HOME_PRODUCTS, payload: res.products })
                return resolve(res)
            })
            .catch((error) => {
                return reject(error)
            })
    })
}

export const productDetails = (id) => {
    return new Promise((resolve, reject) => {
        apiGet(PRODUCT + `/${id}`).then((res) => {
            return resolve(res)
        }).catch((error) => {
            return reject(error)
        })
    })
}

