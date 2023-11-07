import React from 'react'
import './styles.css';
import {AiFillStar} from 'react-icons/ai'
const StarsBox = ({noOfStars}) => {
    const elements=[...Array(noOfStars)]
  return (
    <div className='box'>
        <div className='cell-container'>

       {elements.map((e,i)=> <div className='star-cell' key={i}><AiFillStar size={45}/></div>)}
        </div>
    </div>
  )
}

export default StarsBox