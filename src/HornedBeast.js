import React from "react";
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
      <article>
        <h2>{this.props.title}</h2>
        <img onClick={this.handleWaves} src={this.props.image_url} alt = {this.props.description}/>
        <p>{this.state.hearts} :💖</p>
        <p>{this.props.description}</p>
      </article>
    )
  }
}

export default HornedBeast;