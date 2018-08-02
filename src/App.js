import React, { Component } from 'react';
import MySideNav from './Components/sidebar'
import Logo from './assets/TKS-logo.jpg'

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="strip">
        <div className="Logo">
        <img src={Logo} height="35"/>
        </div>
        <MySideNav />
      </div>
    );
  }
}

export default App;
