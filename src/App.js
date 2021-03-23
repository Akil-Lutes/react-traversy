import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';
import UserItem from './components/users/UserItem';
import './App.css';

class App extends Component {
  render() {
    return (
    // Line 9 is my prop, if I leave line 9 like <Navbar /> then static props will be passed in from Navbar.js
    // I can also pass in static PropTypes in line 10 to make my app more disciplined (after title="")
      <div className="App">
        <Navbar title="Github Finder" icon="fab fa-github" />
        <UserItem />
      </div>
    );
  }
}

export default App;
