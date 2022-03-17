import React from 'react';
import HornedBeast from './HornedBeast.js';
import './Main.css';

class Main extends React.Component {
  
  render() {  
    let hBeast = this.props.data.map((beast, index) => 
        <HornedBeast
          title={beast.title}
          image_url={beast.image_url}
          description={beast.description}
          keyword={beast.keyword}
          horns={beast.horns}
          key={index}
          displayB={this.props.displayB}
        />
        );

    return (
      <main>
        {hBeast}
      </main>
    )
  }
}

export default Main;