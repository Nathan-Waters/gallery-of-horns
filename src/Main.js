import React from "react";
import HornedBeast from "./HornedBeast.js";
import './Main.css';

class Main extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      data: '',
      beastShow: [],
    }
  }
  displayBeasts = (b) => {
    if(this.props.hornNum === 0){
      this.beastShow = b
    } else {
      this.beastShow = b.filter(horn => horn.props.horns === this.props.hornNum)
    }
  }
    
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
        },
        );
        
        return (
          <>
        <main>          
          {(() => {
          if(this.props.hornNum === 0){
            return beasts
          } else {
            return beasts.filter(horn => horn.props.horns === this.props.hornNum)
          }
        })()}        
        </main>
      </>
    )
  }
}

export default Main;