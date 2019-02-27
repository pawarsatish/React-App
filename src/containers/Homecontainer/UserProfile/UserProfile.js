import React, { Component } from "react";
import UserService from "./../../../Services/UserService";
import "./UserProfile.css";
export class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      UserID: "",
      UserName: "",
      Email: null,
      Password: "",
      RoleId: "",
      PersonalUniqueueID: "",
      FullName: "",
      FirstName: "",
      MiddleName: "",
      LastName: "",
      GenderIs: "",
      DateOfBirth: "",
      Age: "",
      Address: "",
      FlatOrBungalowNumber: "",
      SocietyName: "",
      StreetName: "",
      City: "",
      State: "",
      PinCode: "",
      PhoneNo: "",
      MobileNo: "",
      IsPhysicalDisability: "",
      Married: "",
      Education: "",
      BirthSign: "",
      ErrorMessage: false
    };
  }
  componentDidMount() {
    var serv = new UserService();

    serv.GetUserProfileInfo().then(result => {
      if (result.data) {
        if (result.data.data) {
          var Obj = result.data.data;
          this.setState({ UserID: Obj.UserID });
          this.setState({ UserName: Obj.UserName });
          this.setState({ Email: "" });
          this.setState({ Password: Obj.Password });
          this.setState({ RoleId: Obj.RoleId });
          this.setState({ PersonalUniqueueID: Obj.PersonalUniqueueID });
          this.setState({ FullName: Obj.FullName });
          this.setState({ FirstName: Obj.FirstName });
          this.setState({ MiddleName: Obj.MiddleName });
          this.setState({ LastName: Obj.LastName });
          this.setState({ GenderIs: Obj.GenderIs });
          this.setState({ DateOfBirth: Obj.DateOfBirth });
          this.setState({ Age: Obj.Age });
          this.setState({ Address: Obj.Address });
          this.setState({ FlatOrBungalowNumber: Obj.FlatOrBungalowNumber });
          this.setState({ SocietyName: Obj.SocietyName });
          this.setState({ StreetName: Obj.StreetName });
          this.setState({ City: Obj.City });
          this.setState({ State: Obj.State });
          this.setState({ PinCode: Obj.PinCode });
          this.setState({ PhoneNo: Obj.PhoneNo });
          this.setState({ MobileNo: Obj.MobileNo });
          this.setState({ IsPhysicalDisability: Obj.IsPhysicalDisability });
          this.setState({ Married: Obj.Married });
          this.setState({ Education: Obj.Education });
          this.setState({ BirthSign: Obj.BirthSign });
          this.setState({ ErrorMessage: false });
        } else {
          this.setState({ ErrorMessage: true });
        }
      } else {
        this.setState({ ErrorMessage: true });
      }
    });
  }

  render() {
    return (
      <div className="container emp-profile">
        {this.state.ErrorMessage ? (
          <div className="row">
            <div className="col-md-12">
              <h3> Your profile needs admin approval </h3>
              <p>You can view your profile once admin approves it.</p>
            </div>
          </div>
        ) : (
          <form>
            <div className="row">
              <div className="col-md-4">
                <div className="profile-img">
                  {this.state.GenderIs === "Female" ? (
                    <img src={require("./../../../Images/Female.jpg")} alt="" />
                  ) : (
                    <img src={require("./../../../Images/Male.jpg")} alt="" />
                  )}
                </div>
              </div>
              <div className="col-md-6">
                <div className="profile-head">
                  <h5>{`${this.state.FirstName} ${this.state.LastName}`}</h5>
                  <h6> Access User </h6>
                  <ul className="nav nav-tabs" id="myTab" role="tablist">
                    <li className="nav-item">
                      <a
                        className="nav-link active"
                        id="home-tab"
                        data-toggle="tab"
                        href="#home"
                        role="tab"
                        aria-controls="home"
                        aria-selected="true"
                      >
                        About
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-2">
                <input
                  disabled
                  type="submit"
                  className="profile-edit-btn"
                  name="btnAddMore"
                  value="Edit Profile"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <div className="profile-work">
                  <p>Address</p>
                  {` ${this.state.FlatOrBungalowNumber}, ${
                    this.state.SocietyName
                  },${this.state.StreetName},${this.state.City},${
                    this.state.State
                  }`}
                </div>
              </div>
              <div className="col-md-8">
                <div className="tab-content profile-tab" id="myTabContent">
                  <div
                    className="tab-pane fade show active"
                    id="home"
                    role="tabpanel"
                    aria-labelledby="home-tab"
                  >
                    <div className="row">
                      <div className="col-md-6">
                        <label>User Id</label>
                      </div>
                      <div className="col-md-6">
                        <p>{this.state.UserID}</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <label>Role Id</label>
                      </div>
                      <div className="col-md-6">
                        <p>{this.state.RoleId}</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <label>Name</label>
                      </div>
                      <div className="col-md-6">
                        <p>{`${this.state.FirstName} ${this.state.MiddleName} ${
                          this.state.LastName
                        } `}</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <label>Email</label>
                      </div>
                      <div className="col-md-6">
                        <p>Not Mentioned</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <label>Date Of Birth</label>
                      </div>
                      <div className="col-md-6">
                        <p>{this.state.DateOfBirth}</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <label>Physical Disability</label>
                      </div>
                      <div className="col-md-6">
                        <p>{this.state.IsPhysicalDisability}</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <label>Phone</label>
                      </div>
                      <div className="col-md-6">
                        <p>{this.state.PhoneNo}</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <label>Gender</label>
                      </div>
                      <div className="col-md-6">
                        <p>{this.state.GenderIs}</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <label>Mobile</label>
                      </div>
                      <div className="col-md-6">
                        <p>{this.state.MobileNo}</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <label>Married</label>
                      </div>
                      <div className="col-md-6">
                        <p>{this.state.Married}</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <label>Education</label>
                      </div>
                      <div className="col-md-6">
                        <p>{this.state.Education}</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <label>BirthSign</label>
                      </div>
                      <div className="col-md-6">
                        <p>{this.state.BirthSign}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        )}
      </div>
    );
  }
}

export default UserProfile;
