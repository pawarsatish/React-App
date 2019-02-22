import React, { Component } from "react";

export class Notification extends Component {
  render() {
    return <span style={{ marginLeft: "20px" }}>{this.props.status}</span>;
  }
}
export default Notification;
