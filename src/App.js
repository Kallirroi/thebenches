import React, { Component } from 'react';
import './App.css';

import What from './What';
import Stories from './Stories';
import Cards from './Cards';
import Instructions from './Instructions';
import Contact from './Contact';
import Legal from './Legal';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header> the benches </header>
        <img className="bench-image" alt="" src="bench.png" />
        <What/>
        <Stories/>
        <Cards/>
        <Instructions/>
        <Contact/>
        <Legal/>
      </div>
    );
  }
}

export default App;
