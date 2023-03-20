import React from "react";

export default function BirthFunc({ image, name, age }) {
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
}
