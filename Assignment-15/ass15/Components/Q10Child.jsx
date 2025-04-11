import React from "react";
import PropTypes from "prop-types";
export const Q10Child = (props) => {
  return (
    <div className="childbox">
      <h1>Name : {props.name}</h1>
      <br />
      <h1>Registration Number : {props.regNo}</h1>
      <br />
      <h1>Age : {props.age}</h1>
    </div>
  );
};
Q10Child.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
  regNo: PropTypes.string,
};
Q10Child.defaultProps = {
  age: 18,
  regNo: "23BCE1133",
};
