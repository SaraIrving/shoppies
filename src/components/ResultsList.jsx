import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import Movie from './Movie';

export default function(props) {

  // // submission handler for the form in the Movie component

  const getResultsSubmitHandler = function(movie) {
    return ((event) => {
      event.preventDefault();
     
      //Add the movie in question to the nominationsArray in state
      props.setState(prev => ({...prev, nominationsArray: [...prev.nominationsArray, movie]}))
    });
  }


  // if a result is already in the nominations list, don't give it a Nominate button
  const determineButtonDisable = function(nomArray, movieObj) {
    if(nomArray.length >= 5) {
      return true;
    }

    for (let nom of nomArray) {
      if (nom.imdbID === movieObj.imdbID){
        return true;
      } 
    }
    return false;
  };


  return (
    <div className="resultsList">
      <h2>Search Results</h2>
      <p className="resultsInstructions">Click "Nominate" to add a movie to the list of contenders for a Shoppie Award!</p>
      {props.state.resultsArray !== 0 && <div>
      {props.state.resultsArray.map((movie, index) => {
        const movieObj = {
                        title: movie.Title,
                        year: movie.Year,
                        imdbID: movie.imdbID
                        };

        const disableProp = determineButtonDisable(props.state.nominationsArray, movieObj);

        return(
          <Movie source="results" disable={disableProp} movie={movieObj} key={index} state={props.state} setState={props.setState} buttonLabel="Nominate" submitHandler={getResultsSubmitHandler(movieObj)} className="resultButton"></Movie>
        );
      })}
    </div>}


    {/* {(props.state.resultsArray !== 0 && props.state.enableDragDrop) && <Droppable droppableId={props.droppableId}>
      {(provided) => (
        <div {...provided.droppableProps} ref={provided.innerRef}>
        {props.state.resultsArray.map((movie, index) => {
          const movieObj = {
                          title: movie.Title,
                          year: movie.Year,
                          imdbID: movie.imdbID
                          };
  
          const disableProp = determineButtonDisable(props.state.nominationsArray, movieObj);
  
          return(
            <Movie index={index} listItemType={props.listItemType} draggableId={movieObj.title + props.listItemType} disable={disableProp} movie={movieObj} key={index} state={props.state} setState={props.setState} buttonLabel="Nominate" submitHandler={getResultsSubmitHandler(movieObj)} className="resultButton"></Movie>
          );
        })}
        {provided.placeholder}
      </div>

      )}
      
      </Droppable>} */}

    </div> 
    
  
  );

}