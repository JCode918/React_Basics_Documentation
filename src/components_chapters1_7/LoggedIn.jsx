import React from "react";
import { UserGreetings, GuestGreetings } from "./Greetings";

function LoggedIn(props) {
  const isLoggedIn = props.isLogged;
  if (isLoggedIn) {
    return <UserGreetings />;
  } else {
    return <GuestGreetings />;
  }
}

export default LoggedIn;
