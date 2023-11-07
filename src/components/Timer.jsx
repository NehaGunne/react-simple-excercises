import { useEffect, useState } from "react";

export default function Timer() {
  const [timer, setTimer] = useState(10);
  const [count, setCount] = useState(0);
  const [id, setId] = useState(null);
  //console.log(timer)

  /* useEffect(() => {
    if (timer <= 0) {
      clearInterval(id);
      return;
    } else {
      let id1 = setInterval(() => {
        setTimer((p) => p - 1);
      }, 1000);
      setId(id1);
    }
    return () => clearInterval(id);
  }, []); */
 /*  useEffect(() => {
    let interval = null;
    if (timer!==0) {
      interval = setInterval(() => {
        setTimer(seconds => seconds - 1);
      }, 1000);
    } else if (timer=== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [timer]); */

  useEffect(()=>{
    let id;
    if(timer===0){
        clearInterval(id)
    }else{
       id = setTimeout(()=>{
            setTimer((p)=>p-1)
        },1000)
    }
    return(()=>clearInterval(id))
  },[timer])

  return (
    <div className="App">
      <p>no of clicks {count}</p>
      <p>Time left {timer}</p>
      {!!timer && (
        <button onClick={() => setCount((prev) => prev + 1)}>+</button>
      )}
    </div>
  );
}
