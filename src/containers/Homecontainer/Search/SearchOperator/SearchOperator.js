import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
// import UserService from "./../../../../Services/UserService";
import OperatorList from "./../../Userlistcontainer/Operatorlist/Operatorlist";
import "./SearchOperator.css";
export class SearchOperator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      UserName: "",
      Showlist: false,
      Operator: ""
    };
    this.searchOperatorByCriteria = this.searchOperatorByCriteria.bind(this);
    this.OnGetOperator = this.OnGetOperator.bind(this);
    this.OnPropertyChange = this.OnPropertyChange.bind(this);
    //this.serv = new UserService();
  }
  OnGetOperator(e) {
    //Do nothing here
  }
  searchOperatorByCriteria(e) {
    // this.serv.GetAllOperators().then(result => {
    //   var tempOperatorList = [];
    //   this.setState({ Operators: [] });
    //   tempOperatorList = this.state.Operators;
    //   if (result.data.data === undefined) {
    //     var h = this.props.history;
    //     h.push("/login");
    //   } else {
    //     result.data.data.forEach(element => {
    //       tempOperatorList.push(element);
    //     });
    //     this.setState({ Operators: tempOperatorList });
    //   }
    // });
    //this.setState({ Showlist: true });
    var Criteria = this.state.UserName;
    console.log(Criteria);
    this.setState({ Operator: Criteria });
  }
  OnPropertyChange(e) {
    this.setState({ [e.target.name]: e.target.value });
    console.log(this.state.UserName);
  }
  render() {
    return (
      <div className="container h-100">
        <div className="d-flex justify-content-center h-100">
          <div className="searchbar">
            <input
              className="search_input"
              type="text"
              name="UserName"
              placeholder="Search..."
              onKeyUp={this.OnPropertyChange}
            />
            <a className="search_icon" onClick={this.searchOperatorByCriteria}>
              <FontAwesomeIcon icon={faSearch} />
            </a>
          </div>
        </div>
        <OperatorList data={this.state.Operator} />
      </div>
    );
  }
}
export default SearchOperator;
