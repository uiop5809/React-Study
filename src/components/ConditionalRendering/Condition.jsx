import React from "react";

// 로그인 됐을 때
function UserGreeting(props) {
  return (
    <h1>
      {props.name && `${props.name},`} Welcome{" "}
      {props.count && `It's ${props.count} items`}
    </h1>
  );
}
// 로그인 안 됐을 때
function GuestGreeting(props) {
  return <h1>Please sign up.</h1>;
}

function Greeting(props) {
  return props.isLoggedIn ? (
    <UserGreeting name="yejin" count={0} />
  ) : (
    <GuestGreeting />
  );
}

export default function Condition() {
  const isLoggedIn = true;
  return (
    <div>
      <Greeting isLoggedIn={isLoggedIn} />
    </div>
  );
}
