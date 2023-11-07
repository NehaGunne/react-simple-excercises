import { INCREMENT_COUNTER } from "./types"

export const incrementCounter=(number=1)=>{
    return {
        type:INCREMENT_COUNTER,
        payload:number
    }
}