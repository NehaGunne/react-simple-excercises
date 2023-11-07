import React, { useState } from "react";

/* Visit www.reactchallenges.live */

/* Instructions: 
   Create a Progress Bar that should fill based on the input percentage value
*/

export default function App() {
  const [data, setData] = useState({});
  console.log(data)
  const handleChange = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const obj={}
    for (let [key,value] of formData ){
     // obj[key]=value
      setData((prev)=>({...prev,[key]:value}))
    }
  };

  return (
    <>
      <div className="App">
        <form className="App" onSubmit={handleChange}>
          <label htmlFor="username">username:</label>
          <input type="text" id="username" name="username" />
          <label htmlFor="fullname">fullname:</label>
          <input type="text" id="fullname" name="fullname" />
          <label htmlFor="age">age:</label>
          <input type="text" id="age" name="age" />
          <button>
            submit
          </button>
        </form>
        <h3>Request sent</h3>
        <p>Username: {data.username} </p>
        <p>fullname: {data.fullname}</p>
        <p>age: {data.age} </p>
      </div>
    </>
  );
}
