import React from 'react';
import Form from 'react-bootstrap/Form';
import './Horns.css';

class Horns extends React.Component {

  render() {
    return (
      <Form onChange={this.props.handleHornSelection}>
        <Form.Group className="sortByHorns">
          <Form.Label>How Many Horns You Tryna See?</Form.Label>
          <Form.Select>
            <option value="0">All</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
            <option value="100">To Many!</option>
          </Form.Select>

        </Form.Group>
      </Form>
    )
  }
}

export default Horns;
