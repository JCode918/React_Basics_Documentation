import React from "react";

function ListItems(props) {
  return (
    <div>
      <li>{props.value}</li>
    </div>
  );
}

export default function NumberList(props) {
  const numbers = props.numbers;
  /*This code doesn't utilize the full power jsx*/
  /*   const listItems = numbers.map(numb => (
    <ListItems value={numb} key={numb.toString()} />
  ));

  return <ul>{listItems}</ul>; */
  /* Code That Utilizes the power of jsx syntax*/
  return (
    <ul>
      {numbers.map(number => (
        <ListItems value={number} key={number.toString()} />
      ))}
    </ul>
  );
}
