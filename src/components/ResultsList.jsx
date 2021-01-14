import React from 'react';
import Movie from './Movie';

export default function(props) {


  return (
    <div>
      {props.state.resultsArray.map((movie, index) => {
        return(
          <Movie movie={movie} key={index}></Movie>
        );
      })}
    </div>
  );

}