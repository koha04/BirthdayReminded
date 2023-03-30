import React, { memo } from "react";
import PropTypes from "prop-types";

export const BirthFunc = memo(({ image, name, age }) => {
  return (
    <div className="img-text">
      <div className="img">
        <img src={image} alt={name} />
      </div>
      <div className="text">
        <span className="name">{name}</span>
        <span className="age">{age}</span>
      </div>
    </div>
  );
});

BirthFunc.PropTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  age: PropTypes.string.isRequired,
};
