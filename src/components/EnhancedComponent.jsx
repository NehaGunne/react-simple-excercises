import React,{useState} from 'react'

/* const EnhancedComponent = (Component) => {
    const [count,setcount]=useState(0);
    const incrementcounter=()=>setcount((prev)=>prev+1)
  return ((props)=>
    <Component count={count} incrementcounter={incrementcounter}/>
  )
}
 */
function EnhancedComponent(Wrapped) {
  const Newfunc=(props) => {
    const [count,setcount]=useState(0);
    const incrementcounter=()=>setcount((prev)=>prev+1)
    return <Wrapped {...props} count={count} incrementcounter={incrementcounter}/>
  }
  return Newfunc
}

export default EnhancedComponent