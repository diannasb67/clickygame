
import React from "react";
import "./style.css";

const FlowerCard = (props) => {
  return <div className="card flowers">
    <img alt={props.name} src={props.image} />
    {props.children}
    </div>;
}


export default FlowerCard;