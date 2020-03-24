import React from "react";
import WarningBanner from "./WarningBanner";

export class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showWarning: true,
    };

    // Binding for functions
    this.handleToggleClick = this.handleToggleClick.bind(this);
  }

  handleToggleClick() {
    this.setState(state => ({
      showWarning: !state.showWarning,
    }));
  }

  render() {
    return (
      <div>
        <WarningBanner warn={this.state.showWarning} />
        <button onClick={this.handleToggleClick}>{!this.state.showWarning ? 'Show Warning' : 'Hide Warning'}</button>
      </div>
    );
  }
}

export default Page;
