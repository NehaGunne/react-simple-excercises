import React from "react";
// sometimes there will be diff names for some events on diff browsers, then we need to implement the
// eventhandling considering these diff names. To avoid this - react creates a wrapper around the events
// create common name for all the events across the browsers
// increases the performance of the application as React reuses the event object.

const SyntheticEvent = () => {
  const handleClick = (e) => {
    //propogation-> prevents call to parent component when child component is clicked
    //e.stopPropagation();
    console.log("btn clicked");
  };
  return (
    <>
      <div className="main-div" onClick={(e) => console.log("clicked div")}>
        <button onClick={() => handleClick()}>clickme</button>
      </div>
     
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/VAaUy_Moivw?si=fv4_K82HhzuOZPi9"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </>
  );
};

export default SyntheticEvent;
