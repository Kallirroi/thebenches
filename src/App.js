import React, { Component } from 'react';
import './App.css';

import What from './What';
import Stories from './Stories';
import Cards from './Cards';
import Instructions from './Instructions';
import Contact from './Contact';
import Legal from './Legal';

import {
  ShareButtons,
  ShareCounts,
  generateShareIcon
} from 'react-share';

const TwitterIcon = generateShareIcon('twitter');
const { TwitterShareButton } = ShareButtons;

import ReactGA from 'react-ga';

ReactGA.initialize('UA-111273244-01');
ReactGA.pageview(window.location.pathname + window.location.search);

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
        <TwitterShareButton
            url={"http://thebenches.media.mit.edu/"}
            title={"A MIT Media Lab project about depolarization"}>
            <TwitterIcon
              size={24}
              round />
          </TwitterShareButton>

      </div>
    );
  }
}

export default App;
