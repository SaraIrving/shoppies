import React from 'react';
import Movie from './Movie';

export default function NominationsList(props) {

  return (
    <div className="nominationsList">
      {props.state.nominationsArray.length !== 0 && <div>
        {props.state.nominationsArray.map((movie, index) => {
          console.log("NOM MOVIE = ", movie);
          console.log("NOM MOVIE props = ", props);
          return (
            <Movie movie={movie} key={index} state={props.state} setState={props.setState} buttonLabel="Remove"></Movie>
          );
        })}
      </div>}

    </div>
 

  );
}