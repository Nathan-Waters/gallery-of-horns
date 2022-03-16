import React from "react";
import HornedBeast from "./HornedBeast.js";
import './Main.css';

class Main extends React.Component {
  
  render() {  
    let hBeast = [];
    console.log(this.props);
    this.props.data.forEach((beast, index) => {
      hBeast.push(
        <HornedBeast
          title={beast.title}
          image_url={beast.image_url}
          description={beast.description}
          keyword={beast.keyword}
          horns={beast.horns}
          key={index}
        />
      )
    });

    return (
      <main>
        {hBeast}
      </main>
    )
  }
}

export default Main;