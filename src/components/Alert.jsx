import React from 'react';
import Bounce from 'react-reveal/Bounce';
import grumpyCat from '../images/grumpyCat.png'


export default function Alert () {

  return(
    <Bounce className="alert">
      <img src={grumpyCat} className="memeImg"/>
      <p>
        Nominations list is full! Remove some movies if you want to nominate more
      </p>
      <img src={grumpyCat} className="memeImg"/>
    </Bounce>



  );
}