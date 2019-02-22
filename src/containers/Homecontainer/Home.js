import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom"; //
import User from "./Usercontainer/User";
import UserList from "./Userlistcontainer/Userlist";

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
        <div className="container">
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
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <Link to={"/homepage/create"} className="nav-link">
                    Create User
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={"/homepage/userlist"} className="nav-link">
                    User List
                  </Link>
                </li>
              </ul>
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
          </Switch>
        </div>
      </Router>
    );
  }
}
export default Home;
