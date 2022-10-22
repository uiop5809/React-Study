import React from "react";
// Capture > target > Bubble

export default function Event() {
  const handleButtonClick = () => {
    console.log("handleButtonClick");
  };
  const handleClickCapture = () => {
    console.log("handleClickCapture");
  };
  const handleClickCapture2 = () => {
    console.log("handleClickCapture2");
  };
  const handleclickBubble = () => {
    console.log("handleclickBubble");
  };
  const handleMouseLeave = (e) => {
    console.dir(e);
  };

  return (
    <div onClickCapture={handleClickCapture}>
      <div onClickCapture={handleClickCapture2} onClick={handleclickBubble}>
        <button onClick={handleButtonClick} onMouseLeave={handleMouseLeave}>
          Button
        </button>
      </div>
    </div>
  );
}
