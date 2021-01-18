import React from 'react';
import Bounce from 'react-reveal/Bounce';
import grumpyCat from '../images/grumpyCat.png'


export default function Alert (props) {

  return(
    <Bounce>
      <div className="alert">
        {props.state.enableDragDrop && <img src={grumpyCat} className="memeImg"/>}
        <p>
          Nominations list is full! <br></br> Remove the duds if you want to nominate some more
        </p>
        {props.state.enableDragDrop && <img src={grumpyCat} className="memeImg"/>}
      </div>
      
    </Bounce>



  );
}