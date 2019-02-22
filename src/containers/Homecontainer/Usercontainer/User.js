import React, { Component } from "react";

import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Operator from "./Operator/Operator";
import AccessUser from "./AccessUser/AccessUser";
import SearchOperator from "./../Search/SearchOperator/SearchOperator";
import "./User.css";

export class User extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <div className="bg-light border-right" id="sidebar-wrapper">
            <div className="list-group list-group-flush">
              <Link
                to={"/homepage/create/createuser"}
                className="list-group-item list-group-item-action bg-light"
              >
                Create User
              </Link>
              <Link
                to={"/homepage/create/createoperator"}
                className="list-group-item list-group-item-action bg-light"
                style={
                  sessionStorage.getItem("Role") === "2" ||
                  sessionStorage.getItem("Role") === "3"
                    ? { display: "none" }
                    : { display: "block" }
                }
              >
                Create Operator
              </Link>
            </div>
          </div>
          <div
            className="margintop_minus"
            style={
              sessionStorage.getItem("Role") === "2"
                ? { marginTop: "-5%" }
                : { marginTop: "-10%" }
            }
          >
            <Switch>
              <Route
                path="/homepage/create/createuser"
                component={AccessUser}
              />
              <Route
                path="/homepage/create/createoperator"
                component={Operator}
              />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}
export default User;
