import axios from "axios";

class UserService {
  GetLastInsertedUserId() {
    var headers = {
      "Content-Type": "application/json",
      Authorization: "bearer " + sessionStorage.getItem("Token")
    };
    var resp = axios.get("http://localhost:4090/api/getuserid", {
      headers: headers
    });
    return resp;
  }
  CreateUser(user) {
    var headers = {
      "Content-Type": "application/json",
      Authorization: "bearer " + sessionStorage.getItem("Token")
    };
    var resp = axios.post(
      "http://localhost:4090/api/createuser",
      { user },
      { headers: headers }
    );
    return resp;
  }
  CreateAccessUser(accessUser) {
    console.log("In Crate Access User Serivce");
    var headers = {
      "Content-Type": "application/json",
      Authorization: "bearer " + sessionStorage.getItem("Token"),
      Role: sessionStorage.getItem("Role")
    };
    var resp = axios.post(
      "http://localhost:4090/api/createnormaluser",
      { accessUser },
      { headers: headers }
    );
    return resp;
  }
  GetAllOperators() {
    var headers = {
      "Content-Type": "application/json",
      Authorization: "bearer " + sessionStorage.getItem("Token")
    };
    var resp = axios.get("http://localhost:4090/api/getalluser", {
      headers: headers
    });
    return resp;
  }
  UpdateRole(user) {
    var headers = {
      "Content-Type": "application/json",
      Authorization: "bearer " + sessionStorage.getItem("Token")
    };
    var resp = axios.put(
      "http://localhost:4090/api/updateuser",
      { user },
      { headers: headers }
    );
    return resp;
  }
  GetAllAccessUsers() {
    var headers = {
      "Content-Type": "application/json",
      Authorization: "bearer " + sessionStorage.getItem("Token")
    };
    var resp = axios.get("http://localhost:4090/api/getallnormalusers", {
      headers: headers
    });
    return resp;
  }
  UpdateAccessUsers(accessUser) {
    //console.log(accessUser);
    var headers;
    if (sessionStorage.getItem("Role") === "2") {
      headers = {
        "Content-Type": "application/json",
        Authorization: "bearer " + sessionStorage.getItem("Token"),
        Role: sessionStorage.getItem("Role"),
        _Id: accessUser._id
      };
    } else {
      headers = {
        "Content-Type": "application/json",
        Authorization: "bearer " + sessionStorage.getItem("Token"),
        Role: sessionStorage.getItem("Role")
      };
    }
    var resp = axios.put(
      "http://localhost:4090/api/updatenormaluser",
      { accessUser },
      { headers: headers }
    );
    return resp;
  }
  ActivateAccessUser(accessUser) {
    var headers = {
      "Content-Type": "application/json",
      Authorization: "bearer " + sessionStorage.getItem("Token"),
      Role: sessionStorage.getItem("Role")
    };
    var resp = axios.post(
      "http://localhost:4090/api/activatenormaluser",
      { accessUser },
      { headers: headers }
    );
    return resp;
  }
  ApproveAccessUser(accessUser) {
    var headers = {
      "Content-Type": "application/json",
      Authorization: "bearer " + sessionStorage.getItem("Token"),
      Role: sessionStorage.getItem("Role")
    };
    var resp = axios.post(
      "http://localhost:4090/api/approvenormaluser",
      { accessUser },
      { headers: headers }
    );
    return resp;
  }

  SearchOperator(UserCriteria) {
    var headers = {
      "Content-Type": "application/json",
      Authorization: "bearer " + sessionStorage.getItem("Token"),
      Role: sessionStorage.getItem("Role"),
      Criteria: UserCriteria
    };
    var resp = axios.get("http://localhost:4090/api/searchoperator", {
      headers: headers
    });
    return resp;
  }
  SearchAccessUser(UserCriteria) {
    var headers = {
      "Content-Type": "application/json",
      Authorization: "bearer " + sessionStorage.getItem("Token"),
      Role: sessionStorage.getItem("Role"),
      Criteria: UserCriteria
    };
    var resp = axios.get("http://localhost:4090/api/searchaccessuser", {
      headers: headers
    });
    return resp;
  }
}
export default UserService;
