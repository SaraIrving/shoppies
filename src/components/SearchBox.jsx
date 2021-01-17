import React from 'react';


export default function SearchBox(props) {

  const changeHandler = (event) => {
    console.log("In change handler, event = ", event.target.value)
    props.setState(prev => ({...prev, enteredValue: event.target.value}))
  };

  const submitHandler = (event) => {
    event.preventDefault();
    // trigger api call now with final product that is pulled out of state?
    // alternately, now update a "final value" in the state which will trigger the api call so that the api is not firing for each change in character as the user types in the word
    console.log("IN submission handler")
    console.log(props.state.enteredValue)
    props.setState(prev => ({...prev, searchValue: props.state.enteredValue}))

  };

  const handleKeyPress = (event) => {
     //it triggers by pressing the enter key
     if (event.keyCode === 13) {
      submitHandler();
    }
  };

  return (

    <div className="searchBox">
      <form onSubmit={submitHandler}>
        <label></label>
        <input name="searchBox" placeholder="Movie to search..." type="text" onChange={changeHandler} onKeyPress={handleKeyPress}></input>
      </form>
    </div>
  )

}