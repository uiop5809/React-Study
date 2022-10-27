import React from "react";
import PropTypes from "prop-types";

function PropComponent(props) {
  return (
    <>
      <div>{props.name}</div>
      <div>{props.age}</div>
    </>
  );
}

PropComponent.defaultProps = {
  name: "YeJin",
  age: 7,
};

PropComponent.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
};

export default function Component() {
  return (
    <div>
      <PropComponent />
    </div>
  );
}
