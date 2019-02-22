import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faKey } from "@fortawesome/free-solid-svg-icons";

import LoginService from "./../../Services/LoginService";
import Notification from "./../../Shared/Notifications";
import "./Login.css";

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      UserName: "",
      PassWord: "",
      LoginStatusMessage: "",
      statusMessage: false,
      usernameRequired: false,
      passwordRequired: false
    };
    this.OnPropertyChange = this.OnPropertyChange.bind(this);
    this.AuthUser = this.AuthUser.bind(this);
  }
  OnPropertyChange(e) {
    this.setState({ [e.target.name]: e.target.value });
    this.setState({ usernameRequired: false });
    this.setState({ passwordRequired: false });
    this.setState({ statusMessage: false });
  }
  AuthUser() {
    if (this.state.UserName === "" || this.state.UserName === undefined) {
      this.setState({ usernameRequired: true });
      this.setState({ statusMessage: false });
    } else if (
      this.state.PassWord === "" ||
      this.state.PassWord === undefined
    ) {
      this.setState({ passwordRequired: true });
      this.setState({ statusMessage: false });
    } else {
      var serv = new LoginService();
      serv.AuthUser(this.state.UserName, this.state.PassWord).then(result => {
        if (result.data.statusCode === 200) {
          sessionStorage.setItem("Token", result.data.token);
          sessionStorage.setItem("Authenticated", result.data.authenticated);
          sessionStorage.setItem("Role", result.data.roleId);
          sessionStorage.setItem("LoggedInUser", result.data.UserName);
          this.setState({ statusMessage: true });
          this.setState({ LoginStatusMessage: result.data.status });
          var h = this.props.history;
          h.push("/homepage");
        } else {
          this.setState({ statusMessage: true });
          this.setState({
            LoginStatusMessage: "Username and/or Password is incorrect..!"
          });
          this.setState({ UserName: "" });
          this.setState({ PassWord: "" });
        }
      });
    }
  }
  render() {
    return (
      <div className="container">
        <div className="d-flex justify-content-center h-100">
          <div className="card">
            <div className="card-header">
              <h3>Sign In</h3>
            </div>
            <div className="card-body">
              <form autoComplete="off" autoCorrect="off">
                <div className="input-group form-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <FontAwesomeIcon icon={faUser} />
                    </span>
                  </div>
                  <input
                    type="text"
                    required
                    className="form-control"
                    name="UserName"
                    placeholder="username"
                    value={this.state.UserName}
                    onChange={this.OnPropertyChange}
                  />
                </div>
                <div className="input-group form-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <FontAwesomeIcon icon={faKey} />
                    </span>
                  </div>
                  <input
                    type="password"
                    required
                    className="form-control"
                    name="PassWord"
                    placeholder="password"
                    value={this.state.PassWord}
                    onChange={this.OnPropertyChange}
                  />
                </div>
                <div className="form-group">
                  {this.state.usernameRequired ? (
                    <Notification status={`Username is required.`} />
                  ) : null}
                  {this.state.passwordRequired ? (
                    <Notification status={"Password is required."} />
                  ) : null}
                  {this.state.statusMessage ? (
                    <Notification status={this.state.LoginStatusMessage} />
                  ) : null}
                </div>
              </form>
            </div>
            <div className="card-footer">
              <input
                type="button"
                value="Login"
                className="btn float-right login_btn"
                onClick={this.AuthUser}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
