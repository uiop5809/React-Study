import React from "react";
import { createPortal } from "react-dom";
import ThankyouDialog from "./ThankyouDialog.jsx";

const Portal = (props) => {
  return createPortal(props.children, document.getElementById("portal"));
};

export default function Example() {
  return (
    // portal의 요소더라도 이벤트 버블링해준다.
    <div onClick={() => console.log("div")}>
      <Portal>
        <ThankyouDialog />
      </Portal>
      <div style={{ position: "absolute" }}>
        <button>하하하</button>
      </div>
    </div>
  );
}
