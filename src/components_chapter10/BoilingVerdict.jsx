import React from "react";

function BoilingVerdict(props) {
  if (props.celsius > 100) {
    return <p>The Water is Boiling!</p>;
  }
  return <p>The Water is Not Boiling!</p>;
}

export default BoilingVerdict;