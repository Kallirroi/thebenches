import React, { Component } from 'react';
import './App.css';

import What from './What';
import Stories from './Stories';
import Cards from './Cards';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header> the benches </header>
        <What/>
        <Stories/>
        <Cards/>
      </div>
    );
  }
}

export default App;
