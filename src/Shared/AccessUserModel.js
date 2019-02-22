import React, { Component } from "react";
import Modal from "react-modal";

// import UserService from "./../Services/UserService";
import AccessUserUC from "./AccessUserUC";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)"
  }
};

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement("#root");

class AccessUserModelDialog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: this.props.modalIsOpen
    };
    this.closeModal = this.closeModal.bind(this);
    this.UpdateTable = this.UpdateTable.bind(this);
  }
  closeModal() {
    this.props.closeDialog();
  }
  UpdateTable() {
    this.props.OnUpdate();
  }

  render() {
    return (
      <Modal
        ariaHideApp={true}
        isOpen={this.state.modalIsOpen}
        onAfterOpen={this.afterOpenModal}
        onRequestClose={this.closeModal}
        style={customStyles}
        contentLabel={this.props.ModelLabel}
      >
        <AccessUserUC
          AccessUserdata={this.props.data}
          close={this.closeModal}
          Update={this.UpdateTable}
        />
      </Modal>
    );
  }
}
export default AccessUserModelDialog;
