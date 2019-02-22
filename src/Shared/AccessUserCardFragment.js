import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faCheck } from "@fortawesome/free-solid-svg-icons";
export class AccessUserCardFragment extends Component {
  constructor(props) {
    super(props);
    this.GiveAccessUser = this.GiveAccessUser.bind(this);
    this.ActivateUser = this.ActivateUser.bind(this);
    this.GiveAccessUserForApprove = this.GiveAccessUserForApprove.bind(this);
  }
  GiveAccessUserForApprove(e) {
    this.props.OnApprove(this.props.data);
  }
  GiveAccessUser(e) {
    this.props.OnUpdate(this.props.data);
  }
  ActivateUser(e) {
    this.props.OnActivate(this.props.data);
  }
  render() {
    return (
      <div className="m-4">
        <div className="image-flip">
          <div className="mainflip">
            <div className="frontside">
              <div className="card">
                <div
                  className="card-body text-center"
                  style={
                    this.props.data.PersonalUniqueueID === "-1"
                      ? { backgroundColor: "gray" }
                      : this.props.data.PersonalUniqueueID != "-1" &&
                        this.props.data.ApproveStatus
                      ? { backgroundColor: "Purple" }
                      : null
                  }
                >
                  <p>
                    {this.props.data.GenderIs === "Male" ? (
                      <img
                        className="img-fluid"
                        src={require("./../Images/Male.jpg")}
                        alt="Male Access User"
                      />
                    ) : this.props.data.GenderIs === "Female" ? (
                      <img
                        className="img-fluid"
                        src={require("./../Images/Female.jpg")}
                        alt="Female Access User"
                      />
                    ) : (
                      <img
                        className="img-fluid"
                        src={require("./../Images/EmptyImage.jpg")}
                        alt="Other Access User"
                      />
                    )}
                  </p>
                  <h4 className="card-title">{`${this.props.data.FirstName} ${
                    this.props.data.LastName
                  }`}</h4>
                  <p className="card-text">
                    {`Gender is ${this.props.data.GenderIs} `} <br />
                    {` 
                   Born On ${this.props.data.DateOfBirth} 
                   `}
                    <br />
                    {` 
                   Marritial Status : ${this.props.data.Married} 
                   `}
                    <br />
                    {`Contact : ${this.props.data.MobileNo}`}
                  </p>
                </div>
              </div>
            </div>
            <div className="backside">
              <div className="card">
                <div
                  className="card-body text-center mt-4"
                  style={
                    this.props.data.PersonalUniqueueID === "-1"
                      ? { backgroundColor: "gray" }
                      : null
                  }
                >
                  <h4 className="card-title">{`${this.props.data.FirstName} ${
                    this.props.data.LastName
                  }`}</h4>
                  <p className="card-text">
                    {`Address is ${this.props.data.FlatOrBungalowNumber}, ${
                      this.props.data.SocietyName
                    }`}
                    <br />
                    {`${this.props.data.StreetName}, ${this.props.data.City}, ${
                      this.props.data.State
                    } `}{" "}
                    <br />
                    {`Pin : ${this.props.data.PinCode}`}
                  </p>
                  {this.props.data.PersonalUniqueueID === "-1" &&
                  sessionStorage.getItem("Role") === "1" ? (
                    <span
                      className="btn btn-warning btn-sm m-4"
                      onClick={this.ActivateUser}
                    >
                      Activate <FontAwesomeIcon icon={faCheck} />
                    </span>
                  ) : null}
                  {this.props.data.PersonalUniqueueID != "-1" &&
                  this.props.data.ApproveStatus &&
                  sessionStorage.getItem("Role") === "2" ? null : this.props
                      .data.PersonalUniqueueID != "-1" &&
                    this.props.data.ApproveStatus &&
                    sessionStorage.getItem("Role") === "1" ? (
                    <span
                      className="btn btn-warning btn-sm m-4"
                      onClick={this.GiveAccessUserForApprove}
                    >
                      Approve <FontAwesomeIcon icon={faCheck} />
                    </span>
                  ) : (
                    <span
                      className="btn btn-warning btn-sm m-4"
                      onClick={this.GiveAccessUser}
                    >
                      Update <FontAwesomeIcon icon={faPlus} />
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default AccessUserCardFragment;
