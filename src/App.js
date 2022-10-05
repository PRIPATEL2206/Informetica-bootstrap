import './App.css';
import React, { Component } from 'react';
import PopUp from './components/PopUp/PopUp'
import Navbar from './components/Navbar/Navbar'
import About from './components/About/About'
import Footer from './components/Footer/Footer'
import Scheme from './components/Scheme/Scheme'
// import Education from './data/Education.json'
class App extends Component {
  constructor(){
    super();
    this.state = {
      Education : [],
      serachfield : ''
    }
  }

  onSearchChange = (event) => {
    this.setState({serachfield : event.target.value})
  }
  render(){

    // const filterScheme = this.state.Education.filter(scheme => {
    //   return Education.name.toLowerCase().includes(this.state.serachfield.toLowerCase());
    // })
    return (
      <div className="App">
        <PopUp />
        <Navbar searchChange ={this.onSearchChange}/>
        <About />
        <Scheme scarch={this.state.serachfield}/>
        <Footer />
      </div>
    );
  }
}

export default App;
