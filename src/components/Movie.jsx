import React from 'react';
import Button from './Button';

export default function Movie(props) {

  // expected structure of object in results array:
  // { Poster: "https://m.media-amazon.com/images/M/MV5BMjExNzkxOTYyNl5BMl5BanBnXkFtZTcwODA0MjU4Ng@@._V1_SX300.jpg"
  // Title: "War Horse"
  // Type: "movie"
  // Year: "2011"
  // imdbID: "tt1568911"}

  // const movie = {
  //               title: props.movie.Title,
  //               year: props.movie.Year
  //               };

  const submitHandler = (event) => {
    event.preventDefault();
    // trigger api call now with final product that is pulled out of state?
    // alternately, now update a "final value" in the state which will trigger the api call so that the api is not firing for each change in character as the user types in the word
    console.log("IN NOM SUB handler")
    props.setState(prev => ({...prev, nominationsArray: [...prev.nominationsArray, props.movie]}))
  };


  // add some conditional here! Need to differentiate between Movie in results vs nominations, will need to pass different submit handlers

  return (
    <div>
      <p>{props.movie.title}</p>
      <p>{props.movie.year}</p>
      <form onSubmit={submitHandler}>
        <Button buttonLabel={props.buttonLabel}></Button>
       
      </form>
    </div>
  );

}