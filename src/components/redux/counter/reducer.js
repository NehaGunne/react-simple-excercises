import { INCREMENT_COUNTER } from "./types"

const initialState={counter:0}

export const counterReducer=(state=initialState,action)=>{
    switch(action.type){
        case INCREMENT_COUNTER :return {
            ...state,
            counter: state.counter + action.payload
        }
        default: return state
    }
}

