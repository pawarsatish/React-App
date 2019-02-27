import React, { Component } from "react";
import TableRow from "./TableRow";
export class Table extends Component {
  constructor(props) {
    super(props);
    //console.log(this.props.OperatorData[0]);
    this.EditOperator = this.EditOperator.bind(this);
  }
  EditOperator(Opearator) {
    this.props.GetOperator(Opearator);
  }
  render() {
    return (
      <table
        id="tbloperators"
        className="table table-striped table-condensed table-hover"
      >
        <thead>
          <tr>
            <th>Use Id</th>
            <th>User Name</th>
            <th>Email</th>
            <th colSpan="2">Created At</th>
          </tr>
        </thead>
        <tbody>
          {this.props.OperatorData !== null ||
          this.props.OperatorData.length !== 0 ? (
            this.props.OperatorData.map((obj, idx) => (
              <TableRow key={idx} data={obj} EditClick={this.EditOperator} />
            ))
          ) : (
            <tr>
              <td>Nothing here to show...</td>
            </tr>
          )}
        </tbody>
      </table>
    );
  }
}
export default Table;
