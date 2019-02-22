import React, { Component } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faEye,
  faKey,
  faHashtag,
  faUserCircle,
  faEnvelope
} from "@fortawesome/free-solid-svg-icons";

import { Notification } from "./Notifications";
import UserService from "./../Services/UserService";

export class OperatorUC extends Component {
  constructor(props) {
    super(props);
    this.state = {
      UserID: this.props.data ? this.props.data.UserID : -1,
      UserName: this.props.data ? this.props.data.UserName : "",
      Email: this.props.data ? this.props.data.Email : "",
      Password: this.props.data ? this.props.data.Password : "",
      RoleId: this.props.data ? this.props.data.RoleId : -1,
      UserIdRequired: false,
      RoleIdRequired: false,
      EmailRequired: false,
      UserNameRequired: false,
      PasswordRequire: false,
      statusMessage: false,
      UserCreationStatusMessage: "",
      Roles: [],
      RolesIds: [],
      CreateButtonText: this.props.data ? "Update Operator" : "Create Operator",
      PasswordTxtBoxType: "password"
    };
    this.UpdateUser = this.UpdateUser.bind(this);
    this.CreateUser = this.CreateUser.bind(this);
    this.OnPropertyChange = this.OnPropertyChange.bind(this);
    this.ValidateUserAndSaveOrUpdate = this.ValidateUserAndSaveOrUpdate.bind(
      this
    );
    this.ChangeTextboxType = this.ChangeTextboxType.bind(this);
    this.closeModel = this.closeModel.bind(this);
  }
  closeModel(e) {
    this.props.close(false);
  }
  UpdateUser(e) {
    this.ValidateUserAndSaveOrUpdate(e);
  }
  CreateUser(e) {
    this.ValidateUserAndSaveOrUpdate(e);
  }
  ValidateUserAndSaveOrUpdate(e) {
    if (this.state.UserID === -1 || this.state.UserID === undefined) {
      this.setState({ UserIdRequired: true });
    } else if (this.state.RoleId === -1 || this.state.RoleId === undefined) {
      this.setState({ RoleIdRequired: true });
    } else if (
      this.state.UserName === "" ||
      this.state.UserName === undefined
    ) {
      this.setState({ UserNameRequired: true });
    } else if (
      this.state.Password === "" ||
      this.state.Password === undefined
    ) {
      this.setState({ PasswordRequire: true });
    } else if (this.state.Email === "" || this.state.Email === undefined) {
      this.setState({ EmailRequired: true });
    } else {
      var serv = null;
      var user = null;
      if (this.props.data == null) {
        console.log("In Create Operator");
        serv = new UserService();
        user = {
          UserID: this.state.UserID,
          UserName: this.state.UserName,
          Email: this.state.Email,
          Password: this.state.Password,
          RoleId: this.state.RoleId
        };
        serv.CreateUser(user).then(result => {
          //console.log(result.data.statusMessage);
          if (result.data.statusCode === 200) {
            this.setState({ statusMessage: true });
            this.setState({
              UserCreationStatusMessage: result.data.statusMessage
            });
            var serv = new UserService();
            serv.GetLastInsertedUserId().then(result => {
              var index;
              var id;
              if (result.data) {
                if (result.data.data) {
                  index = result.data.data.length - 1;
                  id = result.data.data[index]["UserID"];
                  id = id + 1;
                } else {
                  index = 0;
                  id = 100;
                }
              } else {
                index = 0;
                id = 100;
              }
              //var index = result.data.data.length - 1;
              //var id = result.data.data[index]["UserID"];
              //id = id + 1;
              this.setState({ UserID: id });
              this.setState({ UserName: "" });
              this.setState({ Email: "" });
              this.setState({ Password: "" });
              this.setState({ RoleId: -1 });
            });
          } else {
            this.setState({ statusMessage: true });
            this.setState({ UserCreationStatusMessage: result.data.error });
          }
        });
      } else {
        console.log("In Update Operator");
        serv = new UserService();
        user = {
          UserID: this.state.UserID,
          UserName: this.state.UserName,
          Email: this.state.Email,
          Password: this.state.Password,
          RoleId: this.state.RoleId
        };
        serv.UpdateRole(user).then(result => {
          console.log(result.data.statusMessage);
          if (result.data.statusCode === 200) {
            this.setState({ statusMessage: true });
            this.setState({
              UserCreationStatusMessage: result.data.statusMessage
            });
            this.props.Update();
          } else {
            this.setState({ statusMessage: true });
            this.setState({ UserCreationStatusMessage: result.data.error });
          }
        });
      }
    }
  }
  componentDidMount() {
    var Role = sessionStorage.getItem("Role");
    if (Role === "1") {
      var tempRoles = ["Operator"];
      var tempRolesIds = [2];
      this.setState({ Roles: tempRoles });
      this.setState({ RolesIds: tempRolesIds });
    }
    if (this.props.data === null) {
      var serv = new UserService();
      serv.GetLastInsertedUserId().then(result => {
        if (result.data.data === undefined) {
          var h = this.props.history;
          h.push("/login");
        } else {
          var index = result.data.data.length - 1;
          var id = result.data.data[index]["UserID"];
          id = id + 1;
          this.setState({ UserID: id });
          this.setState({ UserName: "" });
          this.setState({ Email: "" });
          this.setState({ Password: "" });
          this.setState({ RoleId: -1 });
        }
      });
    }
  }
  ChangeTextboxType(e) {
    if (this.state.PasswordTxtBoxType === "password") {
      this.setState({ PasswordTxtBoxType: "text" });
    } else {
      this.setState({ PasswordTxtBoxType: "password" });
    }
  }
  OnPropertyChange(e) {
    this.setState({ [e.target.name]: e.target.value });
    this.setState({ RoleIdRequired: false });
    this.setState({ EmailRequired: false });
    this.setState({ UserNameRequired: false });
    this.setState({ PasswordRequire: false });
  }
  render() {
    return (
      <div className="d-flex justify-content-center h-100">
        <div className="Usercard">
          <div className="card-header">
            <h3>Operator Creation Wizard</h3>
          </div>
          <div className="card-body">
            <form autoComplete="off" autoCorrect="off">
              <div className="input-group form-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <FontAwesomeIcon icon={faHashtag} />
                  </span>
                </div>
                <input
                  type="text"
                  readOnly
                  required
                  className="form-control"
                  name="UserID"
                  placeholder="userId"
                  value={this.state.UserID}
                />
              </div>
              <div className="input-group form-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <FontAwesomeIcon icon={faUserCircle} />
                  </span>
                </div>
                <select
                  className="form-control"
                  name="RoleId"
                  onChange={this.OnPropertyChange}
                  value={this.state.RoleId}
                >
                  <option value="-1">Select Role</option>
                  {this.state.Roles.map((option, idx) => (
                    <RoleOptions
                      key={idx}
                      data={this.state.RolesIds[idx]}
                      option={option}
                    />
                  ))}
                </select>
              </div>
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
                  onChange={this.OnPropertyChange}
                  value={this.state.UserName}
                />
              </div>
              <div className="input-group form-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <FontAwesomeIcon icon={faKey} />
                  </span>
                </div>
                <input
                  type={this.state.PasswordTxtBoxType}
                  required
                  className="form-control"
                  name="Password"
                  placeholder="password"
                  onChange={this.OnPropertyChange}
                  value={this.state.Password}
                />
                <div className="input-group-prepend">
                  <span
                    className="input-group-text"
                    onClick={this.ChangeTextboxType}
                  >
                    <FontAwesomeIcon icon={faEye} />
                  </span>
                </div>
              </div>
              <div className="input-group form-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <FontAwesomeIcon icon={faEnvelope} />
                  </span>
                </div>
                <input
                  type="text"
                  required
                  className="form-control"
                  name="Email"
                  placeholder="email"
                  onChange={this.OnPropertyChange}
                  value={this.state.Email}
                />
              </div>
            </form>
          </div>
          <div className="card-footer">
            <div className="whitenotify">
              {this.props.data ? (
                <input
                  type="button"
                  value="Close"
                  className="btn login_btn"
                  onClick={this.closeModel}
                />
              ) : null}
              {this.state.RoleIdRequired ? (
                <Notification status={`Please select Role`} />
              ) : null}
              {this.state.UserNameRequired ? (
                <Notification status={"User name is required."} />
              ) : null}
              {this.state.PasswordRequire ? (
                <Notification status={"Password is required."} />
              ) : null}
              {this.state.EmailRequired ? (
                <Notification status={"Email is required."} />
              ) : null}
              {this.state.statusMessage ? (
                <Notification status={this.state.UserCreationStatusMessage} />
              ) : null}
              <input
                type="button"
                value={this.state.CreateButtonText}
                className="btn float-right Operator_create_btn"
                onClick={this.props.data ? this.UpdateUser : this.CreateUser}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export class RoleOptions extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <option value={this.props.data}>{this.props.option}</option>;
  }
}

export default OperatorUC;
