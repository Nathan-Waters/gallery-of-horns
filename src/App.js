import React from 'react';
import Header from './Header.js';
import Footer from './Footer.js';
import Main from './Main.js';
import SelectedBeast from './SelectedBeast.js'
import Modal from 'react-bootstrap/Modal';
import './App.css'
import data from './data.json';

class App extends React.Component{
  constructor(props){
    super(props);
      this.state = {
        // title: title,
        showModal : true
      }
    }
    hideDisplayB = () => {
      this.setState({
        showModal : false
      })
    }
    displayB = (title) => {
      this.setState({
        showModal : true,
        // title : title
      })
    }
  render() {
    return (
      <>
        <Header/>
        <Main
          data={data}
          displayB={this.displayB}
        />
        <Footer/>
        <SelectedBeast
          
          displayB={this.displayB}
        />
      </>
    )
  }
}

export default App;
// constructor(props){
//   super(props);
//   this.state = {
//     title: 'beastly beasts',
//     showModal : false
//   }
// }
// hideDisplayB = () => {
//   this.setState({
//     showModal : false
//   })
// }
// displayB = () => {
//   this.setState({
//     showModal : true,
//     // title : title
//   })
// }