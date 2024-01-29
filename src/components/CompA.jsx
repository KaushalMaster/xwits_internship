import React from "react";

const CompA = (props) => {
  return (
    <div>
      <h4>Value from the props from the parent component</h4>
      {props.value}
    </div>
  );
};

export default CompA;
