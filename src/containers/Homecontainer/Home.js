import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom"; //
import User from "./Usercontainer/User";
import UserList from "./Userlistcontainer/Userlist";
import UserProfile from "./UserProfile/UserProfile";
import "./Home.css";
export class Home extends Component {
  constructor(props) {
    super(props);
    var IsLogged = sessionStorage.getItem("Authenticated");
    if (!IsLogged || IsLogged === undefined) {
      var h = this.props.history;
      h.push("/login");
    }
    this.OnLogOff = this.OnLogOff.bind(this);
  }

  OnLogOff() {
    var h = this.props.history;
    h.push("/logoff");
  }
  render() {
    return (
      <Router>
        <div className="container-fluid">
          <nav
            id="nav"
            className="navbar navbar-expand-lg navbar-light bg-light"
          >
            <Link to={"/homepage"} className="navbar-brand">
              User Registration Firm
            </Link>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              {sessionStorage.getItem("Role") === "1" ||
              sessionStorage.getItem("Role") === "2" ? (
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item custome-button m-2">
                    <Link to={"/homepage/create"} className="nav-link">
                      Create User
                    </Link>
                  </li>
                  <li className="nav-item custome-button m-2">
                    <Link to={"/homepage/userlist"} className="nav-link">
                      User List
                    </Link>
                  </li>
                </ul>
              ) : (
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item custome-button">
                    <Link to={"/homepage/viewprofile"} className="nav-link">
                      View Profile
                    </Link>
                  </li>
                </ul>
              )}
              {sessionStorage.getItem("Role") !== "3" ? (
                <div className="margin-15">
                  <ul className="navbar-nav mr-auto">
                    <li className="nav-item m-1" id="Active">
                      <span>Approved </span>
                    </li>
                    <li className="nav-item m-1" id="InActive">
                      <span>Not Approved </span>
                    </li>
                    <li className="nav-item m-1" id="Pending">
                      <span>Pending </span>
                    </li>
                  </ul>
                </div>
              ) : (
                <span />
              )}
              <Link to={"/homepage"} className="navbar-brand">
                Welcome Back{" "}
                {sessionStorage.getItem("LoggedInUser") !== undefined
                  ? sessionStorage.getItem("LoggedInUser")
                  : ""}
              </Link>
              <div className="floatright">
                <input
                  type="button"
                  className="btn float-right login_btn"
                  value="Log Off"
                  onClick={this.OnLogOff}
                />
              </div>
            </div>
          </nav>
          <br />
          <Switch>
            <Route path="/homepage/create" component={User} />
            <Route path="/homepage/userlist" component={UserList} />
            <Route path="/homepage/viewprofile" component={UserProfile} />
          </Switch>
        </div>
      </Router>
    );
  }
}
export default Home;
