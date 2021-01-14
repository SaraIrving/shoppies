import React from 'react';
import Movie from './Movie';

export default function(props) {


  return (
    <div className="resultsList">
      {props.state.resultsArray !== 0 && <div>
      {props.state.resultsArray.map((movie, index) => {
        const movieObj = {
                        title: movie.Title,
                        year: movie.Year
                        };

        return(
          <Movie movie={movieObj} key={index} state={props.state} setState={props.setState} buttonLabel="Nominate"></Movie>
        );
      })}
    </div>}
    </div> 
  
  );

}