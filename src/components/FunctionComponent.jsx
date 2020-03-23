import React from "react";

function Greetings(props) {
  return (
    <div>
      <h1>Hello, {props.name}</h1>
      <img src={`https://robohash.org/${props.name}?set=set4`} alt={props.name}/>
    </div>
  );
}

export default Greetings;
