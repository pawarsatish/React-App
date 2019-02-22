import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import Table from "./../../../../Shared/Table";
import UserService from "./../../../../Services/UserService";
import ModelDialog from "./../../../../Shared/ModelDialog";

import "./Operatorlist.css";
export class OperatorList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Operators: [],
      ShowPopup: false,
      SelectedOperator: {},
      MobileNo: ""
    };
    this.getusers = this.getusers.bind(this);
    this.refreshTable = this.refreshTable.bind(this);
    this.OnGetOperator = this.OnGetOperator.bind(this);
    this.closeDialogBox = this.closeDialogBox.bind(this);
    this.OnPropertyChange = this.OnPropertyChange.bind(this);
    this.searchOperatorByCriteria = this.searchOperatorByCriteria.bind(this);
    this.getusers(null);
  }

  OnPropertyChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  searchOperatorByCriteria(e) {
    this.getusers(this.state.MobileNo);
  }
  getusers(params) {
    //console.log("In Search LIst");
    var serv = new UserService();
    // console.log(this.props.Operator);
    if (params != null) {
      serv.SearchOperator(params).then(result => {
        var tempOperatorList = [];
        this.setState({ Operators: [] });
        tempOperatorList = this.state.Operators;
        if (result.data.data === undefined) {
          var h = this.props.history;
          h.push("/login");
        } else {
          result.data.data.forEach(element => {
            tempOperatorList.push(element);
          });
          this.setState({ Operators: tempOperatorList });
        }
      });
    } else {
      serv.GetAllOperators().then(result => {
        var tempOperatorList = [];
        this.setState({ Operators: [] });
        tempOperatorList = this.state.Operators;
        if (result.data.data === undefined) {
          var h = this.props.history;
          h.push("/login");
        } else {
          result.data.data.forEach(element => {
            tempOperatorList.push(element);
          });
          this.setState({ Operators: tempOperatorList });
        }
      });
    }
  }
  closeDialogBox(value) {
    this.setState({ ShowPopup: value });
    this.setState({ SelectedOperator: {} });
  }
  refreshTable() {
    this.getusers();
  }
  OnGetOperator(Operator) {
    this.setState({ ShowPopup: true });
    this.setState({ SelectedOperator: Operator });
  }
  render() {
    return (
      <div>
        <div className="container h-100">
          <div className="d-flex justify-content-center h-100">
            <form autoComplete="false" autoCorrect="false">
              <div className="searchbar">
                <input
                  className="search_input"
                  type="text"
                  name="MobileNo"
                  placeholder="enter user name for search.."
                  onKeyUp={this.OnPropertyChange}
                />
                <a
                  className="search_icon"
                  onClick={this.searchOperatorByCriteria}
                >
                  <FontAwesomeIcon icon={faSearch} />
                </a>
              </div>
            </form>
          </div>
        </div>
        <Table
          OperatorData={this.state.Operators}
          GetOperator={this.OnGetOperator}
        />
        {this.state.ShowPopup ? (
          <ModelDialog
            modalIsOpen={this.state.ShowPopup}
            ModelLabel={`Operator Details`}
            data={this.state.SelectedOperator}
            closeDialog={this.closeDialogBox}
            OnUpdate={this.refreshTable}
          />
        ) : null}
      </div>
    );
  }
}
export default OperatorList;
