import React, { Component } from "react";

export class LogOff extends Component {
  constructor(props) {
    super(props);

    sessionStorage.removeItem("Authenticated");
    sessionStorage.removeItem("Token");
    sessionStorage.removeItem("Operator");
    this.ReturnToLogin = this.ReturnToLogin.bind(this);
  }
  ReturnToLogin(e) {
    var h = this.props.history;
    h.push("/");
  }
  render() {
    return (
      <div className="container">
        <div className="d-flex justify-content-center h-100">
          <div className="card">
            <div className="card-header">
              <h3>You are logged off successfully..! </h3>
            </div>
            <div className="card-body">
              <h2 id="successheader">You want to log in again..?</h2>
            </div>
            <div className="card-footer">
              <input
                type="button"
                value="Login"
                className="btn float-right login_btn"
                onClick={this.ReturnToLogin}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LogOff;
