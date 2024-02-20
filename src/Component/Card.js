import React from "react";
import '../App.css'
const Card = ({ mov } , color) => {
  return (
    <div className="card" style={{ backgroundColor: color }}>
      <div> Name:{mov.name} </div>
      <div> age:{mov.age} </div>
      <div> phone:{mov.phone} </div>
    </div>
  );
};

export default Card;
