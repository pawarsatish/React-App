import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import OperatorList from "./Operatorlist/Operatorlist";
import AccessUserList from "./AccessUserlist/AccessUserlist";

import "./Userlist.css";

export class UserList extends Component {
  render() {
    return (
      <Router>
        <div className="container-fluid">
          <div className="bg-light border-right" id="sidebar-wrapper">
            <div className="list-group list-group-flush">
              <Link
                to={"/homepage/userlist/viewusers"}
                className="list-group-item list-group-item-action bg-light"
              >
                View Users
              </Link>
              <Link
                to={"/homepage/userlist/viewoperators"}
                style={
                  sessionStorage.getItem("Role") === "2" ||
                  sessionStorage.getItem("Role") === "3"
                    ? { display: "none" }
                    : { display: "block" }
                }
                className="list-group-item list-group-item-action bg-light"
              >
                View Operators
              </Link>
            </div>
          </div>
          <div
            className="margintop_minus"
            style={
              sessionStorage.getItem("Role") === "2"
                ? { marginTop: "-3%" }
                : { marginTop: "-5%" }
            }
          >
            <Switch>
              <Route
                path="/homepage/userlist/viewusers"
                component={AccessUserList}
              />
              <Route
                path="/homepage/userlist/viewoperators"
                component={OperatorList}
              />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}
export default UserList;
