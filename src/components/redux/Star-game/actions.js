import { SET_SELECTED, UPDATE_STATE } from "./types"



export const updateState=(item=[])=>{
    return {
        type: UPDATE_STATE,
        payload: item
    }
}