import React from "react";
import { LoginButton, LogoutButton } from "./LoginButtons";
import LoggedIn from "./LoggedIn";

export class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
    };
    // Binding of Events
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
  }

  handleLoginClick() {
    this.setState({
      isLoggedIn: true,
    });
  }

  handleLogoutClick() {
    this.setState({
      isLoggedIn: false,
    });
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button;
    if (isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick} />;
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />;
    }

    return (
      <div>
        <LoggedIn isLoggedIn={isLoggedIn} />
        {button}
      </div>
    );
  }
};

export default LoginControl;
