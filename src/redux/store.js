import {applyMiddleware, createStore} from 'redux'
import thunk from 'redux-thunk';
import appReducer from './reducers';

const middlewares = [thunk]


const store =createStore(appReducer, applyMiddleware(...middlewares))

export default store