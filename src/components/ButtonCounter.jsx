import React, { useContext } from 'react'
import { CounterContext } from '../context/CounterContextProvider'

function ButtonCounter() {
    const {count,incrementcounter}=useContext(CounterContext)
  return (
    <>
    <div >ButtonCounter</div>
    <button onClick={incrementcounter}>count: {count}</button>
    </>

  )
}

export default ButtonCounter