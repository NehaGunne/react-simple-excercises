import React, { useEffect, useState} from "react";
import { useSelector } from "react-redux";
import StarsBox from "./StarsBox";
import NumbersBox from "./NumbersBox";
import "./styles.css";


const StarMatchComponent = () => {
  const [stars, setStars] = useState();
  const numbersList=useSelector((state)=>state.star)
  useEffect(() => {
    const noOfstars = Math.floor(Math.random() * 8) +1;
    setStars(noOfstars);
  }, []);
 
  return (
    <div className="container-column">
      <div>StarMatchComponent</div>
      <div className="container">
        <StarsBox noOfStars={stars} />
        <NumbersBox noOfStars={stars} numbersList={numbersList} />
      </div>
    </div>
  );
};

export default StarMatchComponent;
