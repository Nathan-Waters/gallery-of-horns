import React from "react";
import HornedBeast from "./HornedBeast.js";
import './Main.css';

class Main extends React.Component {
  
  render() {  
    let beasts = this.props.data.map((beast, index) => {
      return(
        <HornedBeast
          title={beast.title}
          image_url={beast.image_url}
          description={beast.description}
          keyword={beast.keyword}
          horns={beast.horns}
          key={index}
          showModal={this.props.showModal}
        />
      )
    });

    return (
      <main>
        {beasts}
      </main>
    )
  }
}

export default Main;