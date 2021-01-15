import React from 'react';
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


  return (
    <div className="resultsList">
      {props.state.resultsArray !== 0 && <div>
      {props.state.resultsArray.map((movie, index) => {
        const movieObj = {
                        title: movie.Title,
                        year: movie.Year
                        };

        // if a result is already in the nominations list, don't give it a Nominate button
        const determineButtonDisable = function(nomArray) {
        
          for (let nom of nomArray) {
            if (nom.title === movieObj.title){
              return true;
            } 
          }
          return false;
        };

        const disableProp = determineButtonDisable(props.state.nominationsArray);


        return(
          <Movie disable={disableProp} movie={movieObj} key={index} state={props.state} setState={props.setState} buttonLabel="Nominate" submitHandler={getResultsSubmitHandler(movieObj)}></Movie>
        );
      })}
    </div>}
    </div> 
  
  );

}