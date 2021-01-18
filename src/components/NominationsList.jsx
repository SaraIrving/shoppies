import React from 'react';
import Movie from './Movie';
import { Droppable } from "react-beautiful-dnd";

export default function NominationsList(props) {

  // submission handler for the form in the Movie component

  const getNomSubmitHandler = function(key){
    return ((event) => {
        event.preventDefault();
        // remove the movie in question from the nominations array
        
        props.setState(prev => {
          
          const nomCopy = prev.nominationsArray.slice(0)
          nomCopy.map(each => console.log("before-", each.title))
          console.log("NOM COPY BEFORE = ", nomCopy.length);
          nomCopy.splice(key, 1);
          console.log("NOM COPY AFTER = ", nomCopy.length);
          nomCopy.map(each => console.log("after -", each.title))
          return(
            {...prev, nominationsArray: nomCopy}
          )
        })
      }
    )
  }

  return (
    <div className="nominationsList">
      <h2>Shoppie Award Nominees</h2>
        {props.state.enableDragDrop && <p className="nomsInstructions">Drag and drop the nominees to reorder their ranking. Click "Remove" to bump them out of the running!</p>}
        {!props.state.enableDragDrop && <p className="nomsInstructions">Click "Remove" to bump a nominee out of the running!</p>}
        {(props.state.nominationsArray.length !== 0 && props.state.enableDragDrop) && <Droppable droppableId={props.droppableId} id="nomListDnd">
        {(provided) => (
          <div  {...provided.droppableProps} ref={provided.innerRef}>
            {console.log("State in NOM LIST = ", props.state.nominationsArray)}
          {props.state.nominationsArray.map((movie, index) => {
            return (
              <Movie listItemType={props.listItemType} draggableId={movie.title + props.listItemType} index={index} disable={false} movie={movie} key={index} state={props.state} setState={props.setState} buttonLabel="Remove" submitHandler={getNomSubmitHandler(index)} className="nomButton"></Movie>
            );
          })}
          {provided.placeholder}
        </div>

        )}
        </Droppable>}
        {(props.state.nominationsArray.length !== 0 && !props.state.enableDragDrop) && <div>
          {props.state.nominationsArray.map((movie, index) => {
            return (
              <Movie disable={false} movie={movie} key={index} state={props.state} setState={props.setState} buttonLabel="Remove" submitHandler={getNomSubmitHandler(index)} className="nomButton"></Movie>
            );
          })}
        </div>}

    </div>
  );
}