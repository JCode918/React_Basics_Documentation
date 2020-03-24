import React from "react";

export class UserGreetings extends React.Component {
  render() {
    return <h1>Welcome Back!</h1>;
  }
}

export class GuestGreetings extends React.Component {
  render() {
    return <h1>Hello Guest! Please take some time and sign up!</h1>;
  }
}
