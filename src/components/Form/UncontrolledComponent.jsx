import React, { useRef } from "react";
// 컴포넌트가 가진 값이 ref에 담긴 것

export default function UncontrolledComponent() {
  const fileInputRef = useRef(null);
  function handleSubmit(event) {
    event.preventDefault();
    alert(`Selected file - ${fileInputRef.current.files[0].name}`);
  }
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Upload file:
        <input type="file" ref={fileInputRef} />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}
