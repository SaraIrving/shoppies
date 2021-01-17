import React from 'react';
import Bounce from 'react-reveal/Bounce';
import grumpyCat from '../images/grumpyCat.png'


export default function Alert () {

  return(
    <Bounce>
      <div className="alert">
        <img src={grumpyCat} className="memeImg"/>
        <p>
          Nominations list is full! <br></br> Remove the duds if you want to nominate some more
        </p>
        <img src={grumpyCat} className="memeImg"/>
      </div>
      
    </Bounce>



  );
}