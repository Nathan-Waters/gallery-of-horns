import React from "react";
import Header from './Header.js';
import Footer from './Footer.js';
import Main from './Main.js';
import Form from './Form.js';
import SelectedBeast from "./SelectedBeast.js";
import './App.css'
import data from './data.json';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      title: '',
      showModal: false,
      discription: '',
      image_url: '',
    }
  }
  hideModal = () =>  {
    this.setState({
      showModal: false
    })
  }
  showModal = (title, discription, image_url) =>  {
    this.setState({
      showModal: true,
      title: title,
      discription: discription,
      image_url: image_url,
    })
  }
  render() {
    return (
      <>
        <Header/>
        <Main
          data={data}
          showModal={this.showModal}
        />
        <Footer/>
        <SelectedBeast
          showModal={this.state.showModal}
          hideModal={this.hideModal}
          title={this.state.title}
          discription={this.state.discription}
          image_url={this.state.image_url}
        />
      </>
    )
  }
}

export default App;