import { SET_SELECTED,UPDATE_STATE } from "./types"

const initialState=[{value:1,isSelected:false,isCompleted:false,error:false},
    {value:2,isSelected:false,isCompleted:false,error:false},
    {value:3,isSelected:false,isCompleted:false,error:false},
    {value:4,isSelected:false,isCompleted:false,error:false},
    {value:5,isSelected:false,isCompleted:false,error:false},
    {value:6,isSelected:false,isCompleted:false,error:false},
    {value:7,isSelected:false,isCompleted:false,error:false},
    {value:8,isSelected:false,isCompleted:false,error:false},
    {value:9,isSelected:false,isCompleted:false,error:false},

];

export const starReducer=(state=initialState,action)=>{
    switch(action.type){
        case UPDATE_STATE:
            return [
                ...action.payload
            ]
        default: return state
    }
}