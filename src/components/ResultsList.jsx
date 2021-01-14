import React from 'react';
import Movie from './Movie';

export default function(props) {


  return (
    <div className="resultsList">
      {props.state.resultsArray !== 0 && <div>
      {props.state.resultsArray.map((movie, index) => {
        return(
          <Movie movie={movie} key={index}></Movie>
        );
      })}
    </div>}
    </div> 
  
  );

}