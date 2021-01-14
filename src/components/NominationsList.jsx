import React from 'react';
import Movie from './Movie';

export default function NominationsList(props) {

  return (
    <div className="nominationsList">
      {props.state.nominationsArray.length !== 0 && <div>
        {props.state.nominationsArray.map((movie, index) => {
          return (
            <Movie movie={movie} key={index}></Movie>
          );
        })}
      </div>}

    </div>
 

  );
}