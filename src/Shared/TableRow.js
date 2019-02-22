import React, { Component } from "react";

export class TableRow extends Component {
  constructor(props) {
    super(props);
    this.OnEditClick = this.OnEditClick.bind(this);
    //console.log(this.props.data);
  }
  OnEditClick(e) {
    this.props.EditClick(this.props.data);
  }
  render() {
    return (
      <tr>
        <td>{this.props.data.UserID}</td>
        <td>{this.props.data.UserName}</td>
        <td>{this.props.data.Email}</td>
        <td>{this.props.data.createdAt}</td>
        <td>
          <button className="btn btn-danger" onClick={this.OnEditClick}>
            Edit
          </button>
        </td>
      </tr>
    );
  }
}
export default TableRow;
