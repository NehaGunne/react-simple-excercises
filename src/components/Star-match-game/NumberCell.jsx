import React, { useEffect, useState } from "react";
import "./styles.css";
import { useDispatch, useSelector } from "react-redux";
import { updateState } from "../redux/Star-game/actions";

const NumberCell = ({ item, setNumbersList, noOfStars }) => {
  const numbersList = useSelector((state) => state.star);

  const { value, isSelected, isCompleted } = item;
  const dispatch = useDispatch();
  const status = isSelected ? "selected" : isCompleted ? "completed" : "";
  const handleNumClick = (num) => {
    const newNum = numbersList.map((item) =>
      item.value === num.value ? { ...item, isSelected: true } : item
    );

    dispatch(updateState(newNum));

    const selectedValues = newNum.filter(
      (item) => item.value === num.value || item.isSelected
    );
    var sum;
    if (selectedValues.length === 1) {
      sum = selectedValues[0].value;
    } else {
      sum = selectedValues
        .map((item) => item.value)
        .reduce((acc, val) => acc + val);
    }
    if (sum === noOfStars) {
      const completedArr = newNum.map((item) =>
        item.isSelected
          ? { ...item, isCompleted: true, isSelected: false }
          : item
      );

      dispatch(updateState(completedArr));
    } else if (sum > noOfStars) {
      const errArr = newNum.map((item) =>
        item.isSelected ? { ...item, error: true, isSelected: false } : item
      );
      dispatch(updateState(errArr));
    }
  };

  return (
    <div
      className={`number-cell ${status} ${item.error ? "error" : ""}`}
      onClick={() => handleNumClick(item)}
    >
      {value}
    </div>
  );
};

export default NumberCell;
