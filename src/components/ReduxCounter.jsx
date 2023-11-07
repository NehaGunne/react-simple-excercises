import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { incrementCounter } from './redux/counter/actions';

const ReduxCounter = () => {
 const counter=useSelector(state=>state.counter)
 const dispatch=useDispatch();
  return (
    <div>
        <h2>counter:{counter}</h2>
        <button onClick={()=>dispatch(incrementCounter(5))}>Increment counter</button>
    </div>
  )
}

export default ReduxCounter