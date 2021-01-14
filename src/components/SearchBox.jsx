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
  }


  return (

    <div>
      <p>This is the search box</p>
      <form onSubmit={submitHandler}>
        <label></label>
        <textarea name="searchBox" type="text" onChange={changeHandler}></textarea>
        <button type="submit">Search</button>
      </form>
    

    </div>
  )

}