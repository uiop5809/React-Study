import React from "react";
import Dialog from "./Dialog";

export default function CustomDialog(props) {
  return (
    <Dialog>
      <h1>{props.title}</h1>
      <h1>{props.description}</h1>
    </Dialog>
  );
}
