import React,{useState} from "react";

export const CounterContext= React.createContext({});

const CounterContextProvider=({children})=>{
    const [count,setcount]=useState(0);
    const incrementcounter=()=>setcount((prev)=>prev+1)
    return(
    <CounterContext.Provider value={{count,incrementcounter}}>
        {children}
    </CounterContext.Provider>)

}

export default CounterContextProvider;