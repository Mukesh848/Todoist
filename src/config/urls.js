export const API_BASE_URL = "https://dummyjson.com";

export const getApiUrl = (endpoint) => API_BASE_URL + endpoint; //https://dummyjson.com/products

export const PRODUCT = getApiUrl('/products'); //https://dummyjson.com/products