import React from "react";
// key는 props로 넘어가지 않으며 오로지 고유성만 판단한다.

export default function List() {
  // const numbers = [1, 2, 3, 4, 5];
  // return (
  //   <ul>
  //     {numbers.map((number) => (
  //       <li key={number.toString()}>{number}</li>
  //     ))}
  //   </ul>
  // );
  const todos = [
    { id: 1, text: "Drink Water" },
    { id: 2, text: "Wash Car" },
    { id: 3, text: "Listen Lecture" },
    { id: 4, text: "Go to bed" },
  ];

  const Item = (props) => {
    return <li>{props.text}</li>;
  };

  const todoList = todos.map((todo) => <Item key={todo.id} text={todo.text} />);

  return <>{todoList}</>;
}
