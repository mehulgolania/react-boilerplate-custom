import React, { Component } from 'react';
import demo from '../images/demo.jpg';

class App extends Component {
  render(){
    return <div>
      <h1>React Custom Boilerplate</h1>

      <img src={demo} alt="demo image" />
    </div>
  }
}

export default App;