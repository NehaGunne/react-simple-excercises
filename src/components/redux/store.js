//import { legacy_createStore as createStore } from 'redux'
import {combineReducers, configureStore } from "@reduxjs/toolkit"
import { counterReducer } from './counter/reducer';
import {starReducer} from './Star-game/reducer'
const reducer=combineReducers({
    counter:counterReducer,
    star:starReducer
})
export const store=configureStore({reducer});