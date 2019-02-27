import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import UserService from "./../../../../Services/UserService";
import AccessUserCard from "./../../../../Shared/AccessUserCards";
import AccessUserModelDialog from "./../../../../Shared/AccessUserModel";
import "./AccessUserlist.css";
export class AccessUserList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      AccessUsers: [],
      ShowPopup: false,
      SelectedAccessUser: {},
      Criteria: "",
      SearchKey: "",
      SearchValue: ""
    };
    this.getusers = this.getusers.bind(this);
    this.onGetAccessUser = this.onGetAccessUser.bind(this);
    this.refreshCards = this.refreshCards.bind(this);
    this.closeDialogBox = this.closeDialogBox.bind(this);
    this.onGetAccessUserToActivate = this.onGetAccessUserToActivate.bind(this);
    this.OnPropertyChange = this.OnPropertyChange.bind(this);
    this.searchAccessUserByCriteria = this.searchAccessUserByCriteria.bind(
      this
    );
    this.onGetAccessUsetToApprove = this.onGetAccessUsetToApprove.bind(this);
    this.getusers(null, null, null);
  }
  OnPropertyChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  searchAccessUserByCriteria(e) {
    if (
      this.state.SearchValue !== "" &&
      this.state.Criteria !== "" &&
      this.state.SearchKey !== ""
    ) {
      this.getusers(
        this.state.Criteria,
        this.state.SearchKey,
        this.state.SearchValue
      );
    } else {
      this.getusers(null, null, null);
    }
  }
  getusers(Criteria, SearchKey, SearchValue) {
    var serv = new UserService();

    if (Criteria !== null && SearchKey !== null && SearchValue !== null) {
      serv.SearchAccessUser(Criteria, SearchKey, SearchValue).then(result => {
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
          this.setState({ AccessUsers: tempOperatorList });
        }
      });
    } else {
      serv.GetAllAccessUsers().then(result => {
        var tempOperatorList = [];
        this.setState({ AccessUsers: [] });
        tempOperatorList = this.state.AccessUsers;
        if (result.data.data === undefined) {
          var h = this.props.history;
          h.push("/login");
        } else {
          result.data.data.forEach(element => {
            tempOperatorList.push(element);
          });

          this.setState({ AccessUsers: tempOperatorList });
        }
      });
    }
  }
  getRandomPersonalUniqueId = () => {
    return 101 + Math.floor(Math.random() * 100000 + 1);
  };
  onGetAccessUsetToApprove(AccessUser) {
    var Gender = AccessUser.GenderIs;
    var PhysicalDisability = AccessUser.IsPhysicalDisability;
    var MaritalStatus = AccessUser.Married; //1. Married, Unmarried, Divorced, Widow, Widower, etc
    var EducationStatus = AccessUser.Education; // e.g. Masters, Phd, Graduate, Under-Graduate, HSC, SSC, Illiterate, etc.
    delete AccessUser.GenderIs;
    delete AccessUser.IsPhysicalDisability;
    delete AccessUser.Married;
    delete AccessUser.Education;
    delete AccessUser.ApproveStatus; // Need to delete this property as we are going to save this record in permanant table and that table is not having this property
    AccessUser.Gender = Gender;
    AccessUser.PhysicalDisability = PhysicalDisability;
    AccessUser.MaritalStatus = MaritalStatus; //1. Married, Unmarried, Divorced, Widow, Widower, etc
    AccessUser.EducationStatus = EducationStatus; // e.g. Masters, Phd, Graduate, Under-Graduate, HSC, SSC, Illiterate, etc.
    var serv = new UserService();
    serv.ApproveAccessUser(AccessUser).then(result => {
      if (result.data.statusCode === 200) {
        this.getusers(null, null, null);
      } else {
        alert("Someting went wrong..Couldn't activate user..please try again.");
      }
    });
  }
  onGetAccessUserToActivate(AccessUser) {
    AccessUser.PersonalUniqueueID = this.getRandomPersonalUniqueId();
    var Gender = AccessUser.GenderIs;
    var PhysicalDisability = AccessUser.IsPhysicalDisability;
    var MaritalStatus = AccessUser.Married; //1. Married, Unmarried, Divorced, Widow, Widower, etc
    var EducationStatus = AccessUser.Education; // e.g. Masters, Phd, Graduate, Under-Graduate, HSC, SSC, Illiterate, etc.

    delete AccessUser.GenderIs;
    delete AccessUser.IsPhysicalDisability;
    delete AccessUser.Married;
    delete AccessUser.Education;

    AccessUser.Gender = Gender;
    AccessUser.PhysicalDisability = PhysicalDisability;
    AccessUser.MaritalStatus = MaritalStatus; //1. Married, Unmarried, Divorced, Widow, Widower, etc
    AccessUser.EducationStatus = EducationStatus; // e.g. Masters, Phd, Graduate, Under-Graduate, HSC, SSC, Illiterate, etc.
    var serv = new UserService();
    serv.GetLastInsertedUserId().then(result => {
      if (result.data) {
        if (result.data.data) {
          var index = result.data.data.length - 1;
          var id = result.data.data[index]["UserID"];
          id = id + 1;
        } else {
          index = 0;
          id = 100;
        }
      } else {
        index = 0;
        id = 100;
      }
      AccessUser.UserId = id;
      serv.ActivateAccessUser(AccessUser).then(result => {
        if (result.data.statusCode === 200) {
          this.getusers();
        } else {
          alert(
            "Someting went wrong..Couldn't activate user..please try again."
          );
        }
      });
    });
  }
  closeDialogBox() {
    this.setState({ ShowPopup: false });
    this.setState({ SelectedAccessUser: {} });
    this.refreshCards();
  }
  refreshCards() {
    this.getusers(null, null, null);
  }
  onGetAccessUser(AccessUser) {
    this.setState({ ShowPopup: true });
    this.setState({ SelectedAccessUser: AccessUser });
  }
  render() {
    return (
      <div>
        <div className="form-group">
          <div className="col-lg-12">
            <div className="form-inline">
              <div className="form-group ">
                <div className="col-lg-12">
                  <select
                    className="form-control m-4 s-pretty"
                    name="Criteria"
                    onChange={this.OnPropertyChange}
                    value={this.state.Criteria}
                  >
                    <option value="-1">Select Criteria</option>
                    <option value="InActive">InActive</option>
                    <option value="Active">Active</option>
                    <option value="Pending">Pending</option>
                  </select>
                </div>
              </div>
              <div className="form-group ">
                <div className="col-lg-12">
                  <select
                    className="form-control m-4 s-pretty"
                    name="SearchKey"
                    onChange={this.OnPropertyChange}
                    value={this.state.SearchKey}
                  >
                    <option value="-1">Select SearchKey</option>
                    <option value="UserName">UserName</option>
                    <option value="Mobile">Mobile</option>
                    <option value="Gender">Gender</option>
                  </select>
                </div>
              </div>
              <div className="form-group ">
                <div className="col-lg-12">
                  <div
                    className="container h-100"
                    style={
                      sessionStorage.getItem("Role") === "2"
                        ? { paddingTop: "40px" }
                        : { paddingTop: "0px" }
                    }
                  >
                    <div className="d-flex justify-content-center h-100">
                      <form autoComplete="false" autoCorrect="false">
                        <div className="searchbar">
                          <input
                            className="search_input"
                            type="text"
                            name="SearchValue"
                            placeholder="enter mobile number for search.."
                            onKeyUp={this.OnPropertyChange}
                          />
                          <a
                            className="search_icon"
                            onClick={this.searchAccessUserByCriteria}
                          >
                            <FontAwesomeIcon icon={faSearch} />
                          </a>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {this.state.AccessUsers.length > 0 ? (
          <AccessUserCard
            AccessUserdata={this.state.AccessUsers}
            getAccessUser={this.onGetAccessUser}
            getAccessUserToActivate={this.onGetAccessUserToActivate}
            getAccessUserToApprove={this.onGetAccessUsetToApprove}
          />
        ) : (
          <div className="container">
            <h3>There are no records according to current search criteria.</h3>
          </div>
        )}
        {this.state.ShowPopup ? (
          <AccessUserModelDialog
            modalIsOpen={this.state.ShowPopup}
            ModelLabel={`Access User Details`}
            data={this.state.SelectedAccessUser}
            closeDialog={this.closeDialogBox}
            OnUpdate={this.refreshCards}
          />
        ) : null}
      </div>
    );
  }
}
export default AccessUserList;
