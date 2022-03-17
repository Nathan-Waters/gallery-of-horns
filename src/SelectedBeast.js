import React from 'react';
import Modal from 'react-bootstrap/Modal';

class SelectedBeast extends React.Component {
  // constructor(props){
  //   super(props);
  //     this.state = {
  //       // title: title,
  //       showModal : true
  //     }
  //   }
  //   hideDisplayB = () => {
  //     this.setState({
  //       showModal : false
  //     })
  //   }
  //   displayB = (title) => {
  //     this.setState({
  //       showModal : true,
  //       title : title
  //     })
  //   }
  render(){
    return(
      <>
        <Modal 
        show={this.state.showModal}
        onHide={this.hideDisplayB}
        >
        <Modal.Header closeButton>
          <Modal.Title>{this.state.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>dfsef</Modal.Body>
        </Modal>
      </>
    )
  }
}

export default SelectedBeast;