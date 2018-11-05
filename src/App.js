import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    console.log("This is the process.env", process.env.PUBLIC_URL)
    return (
      <div className="App">
        <h1>Frontend Developer</h1>
        <p>
          Hi, I'm Ronaiza.<br/>
          I’m a Frontend Developer trying to make some JSON data seems more readable for humans. Currently in love with <strong>Reactjs</strong>.
        </p>
      </div>
    );
  }
}

export default App;
