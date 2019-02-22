import React, { Component } from "react";
import AccessUserCardFragment from "./AccessUserCardFragment";
import "./AccessUserCards.css";
export class AccessUserCard extends Component {
  constructor(props) {
    super(props);
    this.GiveAccessUserToParent = this.GiveAccessUserToParent.bind(this);
    this.GiveUsetToActivate = this.GiveUsetToActivate.bind(this);
    this.GiveUserToApprove = this.GiveUserToApprove.bind(this);
  }
  GiveUserToApprove(AccessUser) {
    this.props.getAccessUserToApprove(AccessUser);
  }
  GiveAccessUserToParent(AccessUser) {
    this.props.getAccessUser(AccessUser);
  }
  GiveUsetToActivate(AccessUser) {
    this.props.getAccessUserToActivate(AccessUser);
  }
  render() {
    return (
      <section id="team" className="pb-5">
        <div
          className="Accesscontainer"
          style={
            sessionStorage.getItem("Role") === "2"
              ? { marginTop: "0%" }
              : { marginTop: "0%" }
          }
        >
          <div className="row">
            {this.props.AccessUserdata.map((accessuser, idx) => (
              <AccessUserCardFragment
                key={idx}
                data={accessuser}
                OnUpdate={this.GiveAccessUserToParent}
                OnActivate={this.GiveUsetToActivate}
                OnApprove={this.GiveUserToApprove}
              />
            ))}
          </div>
        </div>
      </section>
    );
  }
}
export default AccessUserCard;
