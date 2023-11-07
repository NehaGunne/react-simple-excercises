import React, { useEffect, useState } from "react";
import "./styles.css";
import NumberCell from "./NumberCell";
import { flushSync } from "react-dom";

const NumbersBox = ({ noOfStars, numbersList }) => {
  
  return (
    <div className="box">
      <div className="cell-container">
        {numbersList.map((num) => (
          <div
           
            key={num.value}
            className="number-main-cell"
          >
            <NumberCell item={num}  numbersList={numbersList}
            noOfStars={noOfStars}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default NumbersBox;
