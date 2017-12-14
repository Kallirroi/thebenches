import React, { Component } from 'react';

class What extends Component {
  render() {
    return (
      <div className="block">
        <div className="subtitle">
        what did we build?
      	</div>        
      	<div className="text"> 
        <p>A theme that is clear and shared across many of the speakers’ work we’ve encountered this semester is that personal interactions and the stories that are mediated through them, are extremely powerful in shaping people’s identities and motives. </p>

          <p>In particular, <a href="https://faculty.polisci.wisc.edu/kwalsh2/" target="blank">Kathy Cramer’s work</a> encourages us to think about the ways in which stories and storytelling allow groups to build unity while simultaneously acknowledging difference. This is especially relevant to polarization in the current politics of the USA, as we seem to be losing the ability to listen to the “other” and to acknowledge the multitudes of opinions, across geographical and socioeconomic differences. </p>

          <p>So what did we do about that?</p> 

          <p>We really believe in the power of storytelling, and in community, so we designed and built a bench, with the hopes of deploying it in a public space like a library.</p>  

          <p> Our bench senses when two people are seated on it, and starts playing excerpts from StoryCorps stories about politics across the political and geographical spectrum of America. </p>  	

          <img alt="" src="cards/process.gif" width="105%" />
        </div>
      </div>      
    );
  }
}

export default What;
