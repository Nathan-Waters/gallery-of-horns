import React from "react";
import Modal from "react-bootstrap/Modal";
import './SelectedBeast.css';

class SelectedBeast extends React.Component {
  render() {
    return (
      <Modal
        show={this.props.showModal}
        onHide={this.props.hideModal}
      >
        <Modal.Header closeButton>
          <Modal.Title>{this.props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img className="horned-pic" src={this.props.image_url} alt={this.props.discription} />
          <p>{this.props.discription}</p>
        </Modal.Body>
      </Modal>
    )
  }
}

export default SelectedBeast;