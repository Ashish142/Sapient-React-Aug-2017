import React, { Component } from 'react';
import './App.css';

import BugTracker from './bugTracker/BugTracker';
import Spinner from './spinner/Spinner';

class App extends Component {
  render() {
    return (
      <div>
        <BugTracker></BugTracker>
        <hr/>
        <Spinner></Spinner>
      </div>
    );
  }
}

export default App;
