import React from 'react';
import Button from './Button';
import { Draggable } from "react-beautiful-dnd";
import cat from '../images/cryingCat.png';
import madLady from '../images/yelling.png';
import drakeNo from '../images/drakeNo.png';
import drakeYes from '../images/drakeYes.png';
import successKid from '../images/successKid.png';

export default function Movie(props) {

  // expected structure of object in results array:
  // { Poster: "https://m.media-amazon.com/images/M/MV5BMjExNzkxOTYyNl5BMl5BanBnXkFtZTcwODA0MjU4Ng@@._V1_SX300.jpg"
  // Title: "War Horse"
  // Type: "movie"
  // Year: "2011"
  // imdbID: "tt1568911"}

  const determineImage = function(index) {
    if(index === 0) {
      return 
    }
  }

  const memeArray = [[drakeYes, "First! That hotline will be blinging!"], [successKid, "Second! We're almost the best!"], [cat, "Third! Not bad, but some mixed feelings."], [madLady, "Fourth!?! I'd like to speak to the manager!"], [drakeNo, "Fifth! Pshssh!"]];

  console.log("MOVIE PROPS = ", props);


  return (
    <div>
       {(props.state.enableDragDrop && props.source === "results") && <div>
                                        {props.disable === true &&  <div className="movieWrapper">
                                                                      <div className="movieInfoWrapper">
                                                                        <p>{props.movie.title} ({props.movie.year})</p>
                                                                      </div>
                                                                        </div>}
                                        {props.disable === false && <div className="movieWrapper">
                                                                      <div className="movieInfoWrapper">
                                                                        <p>{props.movie.title} ({props.movie.year})</p>
                                                                        <form onSubmit={props.submitHandler}>
                                                                          <Button buttonLabel={props.buttonLabel} className={props.className}></Button>
                                                                        </form>
                                                                      </div>
                                                                    </div>}
                                        </div>}

      {(props.state.enableDragDrop && !props.source) &&  <Draggable key={props.draggableId} draggableId={props.draggableId} index={props.index}>
        {(provided) => (
          <div {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
          {props.disable === true &&  <div className="movieWrapper">
                                        <div className="movieInfoWrapper"> 
                                          <p>{props.movie.title} ({props.movie.year})</p>
                                        </div>
                                          </div>}
          {(props.disable === false && props.listItemType === "nominations") && <div className="movieWrapper">
                                        <div className="memeWrapper">
                                          <img src={memeArray[props.index][0]} className="memeImg"/>
                                          <p>{memeArray[props.index][1]}</p> 
                                        </div>
                                        <div className="movieInfoWrapper">
                                          <p>{props.movie.title} ({props.movie.year})</p>
                                          <form onSubmit={props.submitHandler}>
                                            <Button buttonLabel={props.buttonLabel} className={props.className}></Button>
                                          </form>
                                        </div>
                                      
                                      </div>}
          {(props.disable === false && props.listItemType === "results") && <div className="movieWrapper">
          <div className="movieInfoWrapper">
            <p>{props.movie.title} ({props.movie.year})</p>
            <form onSubmit={props.submitHandler}>
              <Button buttonLabel={props.buttonLabel} className={props.className}></Button>
            </form>
          </div>
          </div>}
      </div>
        )}
                                        
                                      </Draggable>}

      {!props.state.enableDragDrop && <div>
                                        {props.disable === true &&  <div className="movieWrapper">
                                                                      <div className="movieInfoWrapper">
                                                                        <p>{props.movie.title} ({props.movie.year})</p>
                                                                      </div>
                                                                        </div>}
                                        {props.disable === false && <div className="movieWrapper">
                                                                      <div className="movieInfoWrapper">
                                                                        <p>{props.movie.title} ({props.movie.year})</p>
                                                                        <form onSubmit={props.submitHandler}>
                                                                          <Button buttonLabel={props.buttonLabel} className={props.className}></Button>
                                                                        </form>
                                                                      </div>
                                                                    </div>}
                                        </div>}
 
    </div>
 
  );

}