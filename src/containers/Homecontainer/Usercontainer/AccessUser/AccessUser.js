import React, { Component } from "react";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faUser,
//   faKey,
//   faHashtag,
//   faUserCircle,
//   faEnvelope,
//   faHome,
//   faCity,
//   faPhone,
//   faMobile,
//   faBook,
//   faBirthdayCake
// } from "@fortawesome/free-solid-svg-icons";
// import { Notification } from "./../../../../Shared/Notifications";
// import UserService from "./../../../../Services/UserService";
import "./AccessUser.css";
import AccessUserUC from "./../../../../Shared/AccessUserUC";

export class AccessUser extends Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   PersonalUniqueueID:
    //     sessionStorage.getItem("Role") === "1"
    //       ? this.getRandomPersonalUniqueId()
    //       : -1,
    //   FullName: "",
    //   FirstName: "",
    //   MiddleName: "",
    //   LastName: "",
    //   Gender: ["Male", "Female", "Other"],
    //   GenderIs: "",
    //   DateOfBirth: "",
    //   Age: "",
    //   Address: "",
    //   FlatOrBungalowNumber: "",
    //   SocietyName: "",
    //   StreetName: "",
    //   City: "",
    //   State: "",
    //   PinCode: "",
    //   PhoneNo: "",
    //   MobileNo: "",
    //   PhysicalDisability: ["Yes", "No"],
    //   IsPhysicalDisability: "",
    //   MaritalStatus: ["Married", "Unmarried", "Divorced", "Widow", "Widower"],
    //   //1. Married, Unmarried, Divorced, Widow, Widower, etc
    //   Married: "",
    //   EducationStatus: [
    //     "Masters",
    //     "Phd",
    //     "Graduate",
    //     "Under-Graduate",
    //     "HSC",
    //     "SSC"
    //   ],
    //   // e.g. Masters, Phd, Graduate, Under-Graduate, HSC, SSC, Illiterate, etc.
    //   Education: "",
    //   BirthSign: "",
    //   ErrorMessage: "",
    //   UserCreationStatusMessage: ""
    // };
    // this.createAccessUser = this.createAccessUser.bind(this);
    // this.OnPropertyChange = this.OnPropertyChange.bind(this);
    // window.setInterval(function() {
    //   console.log("in window time inrter");
    // }, 100);
    this.UpdateTable = this.UpdateTable.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }
  // getRandomPersonalUniqueId = () => {
  //   return 101 + Math.floor(Math.random() * 100000 + 1);
  // };
  // createAccessUser(e) {
  //   if (
  //     this.state.FirstName === "" ||
  //     this.LastName === "" ||
  //     this.MiddleName === ""
  //   ) {
  //     this.setState({ ErrorMessage: "Full Name is required.." });
  //     this.setState({ UserCreationStatusMessage: "" });
  //   } else if (this.state.Age === "") {
  //     this.setState({ ErrorMessage: "Age is required.." });
  //     this.setState({ UserCreationStatusMessage: "" });
  //   } else if (
  //     this.state.FlatOrBungalowNumber === "" ||
  //     this.state.SocietyName === "" ||
  //     this.state.StreetName === ""
  //   ) {
  //     this.setState({ ErrorMessage: " Full address is required" });
  //     this.setState({ UserCreationStatusMessage: "" });
  //   } else if (
  //     this.state.City === "" ||
  //     this.state.State === "" ||
  //     this.state.PinCode === ""
  //   ) {
  //     this.setState({
  //       ErrorMessage: "City , State, PinCode all are required.."
  //     });
  //     this.setState({ UserCreationStatusMessage: "" });
  //   } else {
  //     var serv = new UserService();
  //     var accessUser = {
  //       PersonalUniqueueID: this.state.PersonalUniqueueID,
  //       FullName: `${this.state.FirstName}~${this.state.MiddleName}~${
  //         this.state.LastName
  //       }`,
  //       Gender: this.state.GenderIs,
  //       DateOfBirth: this.state.DateOfBirth,
  //       Age: this.state.Age,
  //       Address: `${this.state.FlatOrBungalowNumber}~${
  //         this.state.SocietyName
  //       }~${this.state.StreetName}`,
  //       City: this.state.City,
  //       State: this.state.State,
  //       PinCode: this.state.PinCode,
  //       PhoneNo: this.state.PhoneNo,
  //       MobileNo: this.state.MobileNo,
  //       PhysicalDisability: this.state.IsPhysicalDisability,
  //       MaritalStatus: this.state.Married, //1. Married, Unmarried, Divorced, Widow, Widower, etc
  //       EducationStatus: this.state.Education, // e.g. Masters, Phd, Graduate, Under-Graduate, HSC, SSC, Illiterate, etc.
  //       BirthSign: this.state.BirthSign
  //     };
  //     serv.CreateAccessUser(accessUser).then(result => {
  //       if (result.data.statusCode === 200) {
  //         this.setState({ statusMessage: true });
  //         this.setState({ ErrorMessage: " " });
  //         this.setState({
  //           UserCreationStatusMessage: result.data.statusMessage
  //         });
  //         this.setState({ FullName: "" });
  //         this.setState({ Address: "" });
  //         this.setState({ FirstName: "" });
  //         this.setState({ MiddleName: "" });
  //         this.setState({ LastName: "" });
  //         this.setState({ GenderIs: "" });
  //         this.setState({ DateOfBirth: "" });
  //         this.setState({ Age: "" });
  //         this.setState({ FlatOrBungalowNumber: "" });
  //         this.setState({ SocietyName: "" });
  //         this.setState({ StreetName: "" });
  //         this.setState({ City: "" });
  //         this.setState({ State: "" });
  //         this.setState({ PinCode: "" });
  //         this.setState({ PhoneNo: "" });
  //         this.setState({ MobileNo: "" });
  //         this.setState({ IsPhysicalDisability: "" });
  //         this.setState({ Married: "" });
  //         this.setState({ Education: "" });
  //         this.setState({ BirthSign: "" });
  //       } else {
  //         this.setState({ statusMessage: true });
  //         this.setState({ UserCreationStatusMessage: result.data.error });
  //       }
  //     });
  //   }
  // }
  // OnPropertyChange(e) {
  //   this.setState({ [e.target.name]: e.target.value });
  // }
  closeModal() {
    //this.props.closeDialog(false);
  }
  UpdateTable() {
    //this.props.OnUpdate();
  }
  render() {
    return (
      <AccessUserUC
        data={null}
        close={this.closeModal}
        Update={this.UpdateTable}
      />
      // <div className="d-flex justify-content-center h-100">
      //   <div className="Usercard">
      //     <div className="card-header">
      //       <h3>User Creation Wizard</h3>
      //     </div>
      //     <div className="card-body extended">
      //       <form
      //         autoComplete="off"
      //         autoCorrect="off"
      //         className="form-horizontal"
      //       >
      //         <div className="input-group form-group">
      //           <div className="input-group-prepend">
      //             <span className="input-group-text">
      //               <FontAwesomeIcon icon={faHashtag} />
      //             </span>
      //           </div>
      //           <input
      //             type="text"
      //             readOnly
      //             required
      //             className="form-control"
      //             name="PersonalUniqueueID"
      //             placeholder="PersonalUniqueueID"
      //             value={this.state.PersonalUniqueueID}
      //           />
      //         </div>
      //         <div className="input-group form-group">
      //           <div className="input-group-prepend">
      //             <span className="input-group-text">
      //               <FontAwesomeIcon icon={faUserCircle} />
      //             </span>
      //           </div>
      //           <input
      //             type="text"
      //             required
      //             className="form-control"
      //             name="FirstName"
      //             placeholder="FirstName"
      //             onChange={this.OnPropertyChange}
      //             value={this.state.FirstName}
      //           />
      //         </div>
      //         <div className="input-group form-group">
      //           <div className="input-group-prepend">
      //             <span className="input-group-text">
      //               <FontAwesomeIcon icon={faUserCircle} />
      //             </span>
      //           </div>
      //           <input
      //             type="text"
      //             required
      //             className="form-control"
      //             name="MiddleName"
      //             placeholder="MiddleName"
      //             onChange={this.OnPropertyChange}
      //             value={this.state.MiddleName}
      //           />
      //         </div>
      //         <div className="input-group form-group">
      //           <div className="input-group-prepend">
      //             <span className="input-group-text">
      //               <FontAwesomeIcon icon={faUserCircle} />
      //             </span>
      //           </div>
      //           <input
      //             type="text"
      //             required
      //             className="form-control"
      //             name="LastName"
      //             placeholder="LastName"
      //             onChange={this.OnPropertyChange}
      //             value={this.state.LastName}
      //           />
      //         </div>
      //         <div className="input-group form-group">
      //           <div className="input-group-prepend">
      //             <span className="input-group-text">
      //               <FontAwesomeIcon icon={faUserCircle} />
      //             </span>
      //           </div>
      //           <select
      //             className="form-control"
      //             name="GenderIs"
      //             onChange={this.OnPropertyChange}
      //             value={this.state.GenderIs}
      //           >
      //             <option defaultValue="-1">Select Gender</option>
      //             {this.state.Gender.map((option, idx) => (
      //               <RoleOptions key={idx} data={option} option={option} />
      //             ))}
      //           </select>
      //         </div>
      //         <div className="input-group form-group">
      //           <div className="input-group-prepend">
      //             <span className="input-group-text">
      //               <FontAwesomeIcon icon={faBirthdayCake} />
      //             </span>
      //           </div>
      //           <input
      //             type="date"
      //             required
      //             className="form-control"
      //             name="DateOfBirth"
      //             placeholder="mm/dd/yyyy"
      //             onChange={this.OnPropertyChange}
      //             value={this.state.DateOfBirth}
      //           />
      //         </div>
      //         <div className="input-group form-group">
      //           <div className="input-group-prepend">
      //             <span className="input-group-text">
      //               <FontAwesomeIcon icon={faKey} />
      //             </span>
      //           </div>
      //           <input
      //             type="Number"
      //             required
      //             className="form-control"
      //             name="Age"
      //             placeholder="Age"
      //             onChange={this.OnPropertyChange}
      //             value={this.state.Age}
      //           />
      //         </div>
      //         <div className="input-group form-group">
      //           <div className="input-group-prepend">
      //             <span className="input-group-text">
      //               <FontAwesomeIcon icon={faHome} />
      //             </span>
      //           </div>
      //           <input
      //             type="text"
      //             required
      //             className="form-control"
      //             name="FlatOrBungalowNumber"
      //             placeholder="FlatOrBungalowNumber"
      //             onChange={this.OnPropertyChange}
      //             value={this.state.FlatOrBungalowNumber}
      //           />
      //         </div>

      //         <div className="input-group form-group">
      //           <div className="input-group-prepend">
      //             <span className="input-group-text">
      //               <FontAwesomeIcon icon={faEnvelope} />
      //             </span>
      //           </div>
      //           <input
      //             type="text"
      //             required
      //             className="form-control"
      //             name="SocietyName"
      //             placeholder="SocietyName"
      //             onChange={this.OnPropertyChange}
      //             value={this.state.SocietyName}
      //           />
      //         </div>
      //         <div className="input-group form-group">
      //           <div className="input-group-prepend">
      //             <span className="input-group-text">
      //               <FontAwesomeIcon icon={faEnvelope} />
      //             </span>
      //           </div>
      //           <input
      //             type="text"
      //             required
      //             className="form-control"
      //             name="StreetName"
      //             placeholder="StreetName"
      //             onChange={this.OnPropertyChange}
      //             value={this.state.StreetName}
      //           />
      //         </div>
      //         <div className="input-group form-group">
      //           <div className="input-group-prepend">
      //             <span className="input-group-text">
      //               <FontAwesomeIcon icon={faCity} />
      //             </span>
      //           </div>
      //           <input
      //             type="text"
      //             required
      //             className="form-control"
      //             name="City"
      //             placeholder="City"
      //             onChange={this.OnPropertyChange}
      //             value={this.state.City}
      //           />
      //         </div>
      //         <div className="input-group form-group">
      //           <div className="input-group-prepend">
      //             <span className="input-group-text">
      //               <FontAwesomeIcon icon={faCity} />
      //             </span>
      //           </div>
      //           <input
      //             type="text"
      //             required
      //             className="form-control"
      //             name="State"
      //             placeholder="State"
      //             onChange={this.OnPropertyChange}
      //             value={this.state.State}
      //           />
      //         </div>
      //         <div className="input-group form-group">
      //           <div className="input-group-prepend">
      //             <span className="input-group-text">
      //               <FontAwesomeIcon icon={faCity} />
      //             </span>
      //           </div>
      //           <input
      //             type="number"
      //             required
      //             className="form-control"
      //             name="PinCode"
      //             placeholder="PinCode"
      //             onChange={this.OnPropertyChange}
      //             maxLength="6"
      //             minLength="6"
      //             value={this.state.PinCode}
      //           />
      //         </div>
      //         <div className="input-group form-group">
      //           <div className="input-group-prepend">
      //             <span className="input-group-text">
      //               <FontAwesomeIcon icon={faPhone} />
      //             </span>
      //           </div>
      //           <input
      //             type="number"
      //             minLength="10"
      //             maxLength="10"
      //             required
      //             className="form-control"
      //             name="PhoneNo"
      //             placeholder="PhoneNo"
      //             onChange={this.OnPropertyChange}
      //             value={this.state.PhoneNo}
      //           />
      //         </div>
      //         <div className="input-group form-group">
      //           <div className="input-group-prepend">
      //             <span className="input-group-text">
      //               <FontAwesomeIcon icon={faMobile} />
      //             </span>
      //           </div>
      //           <input
      //             type="number"
      //             required
      //             className="form-control"
      //             name="MobileNo"
      //             placeholder="MobileNo"
      //             onChange={this.OnPropertyChange}
      //             minLength="10"
      //             maxLength="10"
      //             value={this.state.MobileNo}
      //           />
      //         </div>
      //         <div className="input-group form-group">
      //           <div className="input-group-prepend">
      //             <span className="input-group-text">
      //               <FontAwesomeIcon icon={faUserCircle} />
      //             </span>
      //           </div>
      //           <select
      //             className="form-control"
      //             name="IsPhysicalDisability"
      //             onChange={this.OnPropertyChange}
      //             value={this.state.IsPhysicalDisability}
      //           >
      //             <option defaultValue="-1">
      //               Select Physical Disabilities
      //             </option>
      //             {this.state.PhysicalDisability.map((option, idx) => (
      //               <RoleOptions key={idx} data={option} option={option} />
      //             ))}
      //           </select>
      //         </div>
      //         <div className="input-group form-group">
      //           <div className="input-group-prepend">
      //             <span className="input-group-text">
      //               <FontAwesomeIcon icon={faUserCircle} />
      //             </span>
      //           </div>
      //           <select
      //             className="form-control"
      //             name="Married"
      //             onChange={this.OnPropertyChange}
      //             value={this.state.Married}
      //           >
      //             <option defaultValue="-1">Select Marital Status</option>
      //             {this.state.MaritalStatus.map((option, idx) => (
      //               <RoleOptions key={idx} data={option} option={option} />
      //             ))}
      //           </select>
      //         </div>
      //         <div className="input-group form-group">
      //           <div className="input-group-prepend">
      //             <span className="input-group-text">
      //               <FontAwesomeIcon icon={faBook} />
      //             </span>
      //           </div>
      //           <select
      //             className="form-control"
      //             name="Education"
      //             onChange={this.OnPropertyChange}
      //             value={this.state.Education}
      //           >
      //             <option defaultValue="-1">
      //               Select Educational Qualifications
      //             </option>
      //             {this.state.EducationStatus.map((option, idx) => (
      //               <RoleOptions key={idx} data={option} option={option} />
      //             ))}
      //           </select>
      //         </div>
      //         <div className="input-group form-group">
      //           <div className="input-group-prepend">
      //             <span className="input-group-text">
      //               <FontAwesomeIcon icon={faUser} />
      //             </span>
      //           </div>
      //           <input
      //             type="text"
      //             required
      //             className="form-control"
      //             name="BirthSign"
      //             placeholder="BirthSign"
      //             onChange={this.OnPropertyChange}
      //             value={this.state.BirthSign}
      //           />
      //         </div>
      //       </form>
      //     </div>
      //     <div className="card-footer">
      //       <div className="whitenotify">
      //         {this.state.ErrorMessage ? (
      //           <Notification status={this.state.ErrorMessage} />
      //         ) : null}
      //         {this.state.statusMessage ? (
      //           <Notification status={this.state.UserCreationStatusMessage} />
      //         ) : null}
      //         <input
      //           type="button"
      //           value="Create User"
      //           className="btn float-right user_create_btn"
      //           onClick={this.createAccessUser}
      //         />
      //       </div>
      //     </div>
      //   </div>
      // </div>
    );
  }
}
// export class RoleOptions extends Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     return <option value={this.props.data}>{this.props.option}</option>;
//   }
// }
export default AccessUser;
