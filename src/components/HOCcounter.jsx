import React from 'react'
import EnhancedComponent from './EnhancedComponent'

const HOCcounter = ({...props}) => {
    const {count,incrementcounter}=props
    return (
      <>
      <div>ButtonCounter</div>
       <button onClick={incrementcounter}>count: {count}</button> 
      </>
  
    )
}

export default EnhancedComponent(HOCcounter);