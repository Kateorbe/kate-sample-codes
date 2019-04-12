import React, { Component } from 'react';
import './App.css';
import Header from './components/header.jsx';
import Body from './components/body.jsx';
import Footer from './components/footer.jsx';

class App extends Component {
  render() {

    console.log("IBM");
    
    return (
      

      <div className ='app'>
        <Header />

        <Body />

        <Footer />
      </div>
    );
  }
}

export default App;
