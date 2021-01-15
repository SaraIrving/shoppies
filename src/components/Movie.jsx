import React from 'react';
import Button from './Button';

export default function Movie(props) {

  // expected structure of object in results array:
  // { Poster: "https://m.media-amazon.com/images/M/MV5BMjExNzkxOTYyNl5BMl5BanBnXkFtZTcwODA0MjU4Ng@@._V1_SX300.jpg"
  // Title: "War Horse"
  // Type: "movie"
  // Year: "2011"
  // imdbID: "tt1568911"}



  return (
    <div>
      {props.disable === true &&  <div>
                                      <p>{props.movie.title} ({props.movie.year})</p>
                                      </div>}
      {props.disable === false && <div>
                                    <p>{props.movie.title} ({props.movie.year})</p>
                                    <form onSubmit={props.submitHandler}>
                                      <Button buttonLabel={props.buttonLabel}></Button>
                                    </form>
                                  </div>}
    </div>
 
  );

}