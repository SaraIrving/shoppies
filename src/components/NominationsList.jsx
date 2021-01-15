import React from 'react';
import Movie from './Movie';

export default function NominationsList(props) {

  // submission handler for the form in the Movie component

  const getNomSubmitHandler = function(key){
    return ((event) => {
        event.preventDefault();
        // remove the movie in question from the nominations array
        
        props.setState(prev => {
          const nomCopy = prev.nominationsArray
          nomCopy.splice(key, 1);
          return(
            {...prev, nominationsArray: nomCopy}
          )
        })
      }
    )
  }

  return (
    <div className="nominationsList">
      {props.state.nominationsArray.length !== 0 && <div>
        {props.state.nominationsArray.map((movie, index) => {
          return (
            <Movie disable={false} movie={movie} key={index} state={props.state} setState={props.setState} buttonLabel="Remove" submitHandler={getNomSubmitHandler(index)}></Movie>
          );
        })}
      </div>}

    </div>
 

  );
}