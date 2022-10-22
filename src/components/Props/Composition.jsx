import React from "react";
// 컴포넌트 합성 -> 여러 컴포넌트를 모아서

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

export default function Composition() {
  return (
    <div>
      <Welcome name={"yejin"} />
    </div>
  );
}
