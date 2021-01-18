import React from 'react';


export default function SearchBox(props) {

  const changeHandler = (event) => {
    props.setState(prev => ({...prev, enteredValue: event.target.value}))
  };

  const submitHandler = (event) => {
    event.preventDefault();
    // trigger api call now with final product that is pulled out of state
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
      <p>Type in movie title and hit Enter</p>
      <form onSubmit={submitHandler}>
        <label></label>
        <input name="searchBox" placeholder="Movie to search..." type="text" onChange={changeHandler} onKeyPress={handleKeyPress}></input>
      </form>
    </div>
  );
}