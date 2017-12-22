import React, { Component } from 'react';

class Instructions extends Component {
  render() {
    return (
      <div className="block">
        <div className="subtitle">
        instructions and documentation
      	</div>        
      	<div className="text">
        Do you want to build your own bench? That would make us very happy! <a href="https://www.dropbox.com/s/pz22eal0qrbw1qa/bench%20fabrication%20by%20Sean%20Hickey.pdf?dl=1" target="blank">Here is the PDF</a> that documents the project. If you have questions, feel free to contact us via the links below.
      	</div>
      </div>      
    );
  }
}

export default Instructions;
