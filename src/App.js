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
  generateShareIcon
} from 'react-share';

import ReactGA from 'react-ga';


const TwitterIcon = generateShareIcon('twitter');
const { TwitterShareButton } = ShareButtons;


ReactGA.initialize('UA-111273244-1');
ReactGA.pageview(window.location.pathname);

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
