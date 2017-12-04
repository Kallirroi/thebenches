import React, { Component } from 'react';

class What extends Component {
  render() {
    return (
      <div className="block">
        <div className="subtitle">
        postcards
      	</div>        
      	<div className="text">
          We really want to emphasize a sharing culture for the people who interact with the bench. We designed and printed a set of postcards like the ones below, drawn from the stories that are being narrated by the bench. The cards are free for our audience to mail or to drop inside a dedicated box in the library. We plan to periodically collect the cards and mail them across the network of all "bench-hosting" libraries.
          <div className="images">
            <img alt="" src="cards/image00001.png" />
            <img alt="" src="cards/image00002.png"  />
            <img alt="" src="cards/image00003.png"  />
            <img alt="" src="cards/image00006.png"  />
          </div>
      	</div>
      </div>      
    );
  }
}

export default What;
