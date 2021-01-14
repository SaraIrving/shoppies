import React from 'react';


export default function SearchBox(props) {

  const changeHandler = (event) => {
    console.log("In change handler, event = ", event.target.value)
    props.setState(prev => ({...prev, searchValue: event.target.value}))
  };

  const submitHandler = (event) => {
    event.preventDefault();
    // trigger api call now with final product that is pulled out of state?
    console.log("IN submission handler")
    console.log(props.state.searchValue)
  };

  const handleKeyPress = (event) => {
     //it triggers by pressing the enter key
     if (event.keyCode === 13) {
      submitHandler();
    }
  };

  return (

    <div>
      <p>This is the search box</p>
      <form onSubmit={submitHandler}>
        <label></label>
        <input name="searchBox" placeholder="Movie to search..." type="text" onChange={changeHandler} onKeyPress={handleKeyPress}></input>
        {/* <button type="submit">Search</button> */}
      </form>
    </div>
  )

}