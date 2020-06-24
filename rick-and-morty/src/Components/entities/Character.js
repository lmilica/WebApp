import React from "react";
import "./Character.css";

const Character = (props) => {
  return (
    <div className="Character__Wrapper">
      <img src={props.image} alt="" className="Character__image" />
      <div className="Title__btn">
        <h4>{props.title}</h4>
        <button>Like</button>
      </div>
    </div>
  );
};
export { Character };
