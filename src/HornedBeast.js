import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Card from "react-bootstrap/Card";
import './HornedBeast.css';

class HornedBeast extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      hearts: 0
    }
  }
  handleWaves = () => {
    this.setState({
      hearts: this.state.hearts + 1
    });
  };

  render() {
    return (
      <Card>
        <Card.Title>{this.props.title}</Card.Title>
        <Card.Img onClick={this.handleWaves} src={this.props.image_url} alt = {this.props.description}/>
          <ListGroup>
            <ListGroup.Item>{this.state.hearts} :💖</ListGroup.Item>
            <ListGroup.Item>{this.props.description}</ListGroup.Item>
          </ListGroup>
      </Card>
    )
  }
}

export default HornedBeast;