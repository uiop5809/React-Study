import React, { useState, useEffect } from "react";
// hook으로 관리

export default function FunctionalComponent() {
  const [date, setDate] = useState(new Date());

  function tick() {
    setDate(new Date());
  }
  // componentDidMount
  useEffect(() => {
    const interval = setInterval(() => {
      tick();
    }, 1000);

    // componentWillUnmount
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {date.toLocaleTimeString()}.</h2>
    </div>
  );
}
