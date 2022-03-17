import React from 'react';
import './HornedBeast.css';
import Card from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

class HornedBeast extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      hearts: 0
    }
  }
  handleHearts = () => {
    this.setState({
      hearts: this.state.hearts + 1,
    });
  };

  

  render() {
    return (
      <article>
        <h2>{this.props.title}</h2>
        <img onClick={this.props.displayB} src={this.props.image_url} alt = {this.props.description}/>
        <p>{this.state.hearts} :💖</p>
        <p>{this.props.description}</p>
        <Button onClick={this.handleHearts} >Hearts!</Button>
      </article>
    )
  }
}


export default HornedBeast;