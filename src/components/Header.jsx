import React from 'react'
import Flash from 'react-reveal/Flash';

export default function (props) {

  return (
    <header>
      <Flash><h2 className="title">The Shoppie Awards</h2></Flash>
      {props.state.enableDragDrop &&  <p>Search for your fav movies. Judge them with some help from your fav memes!</p>}
      {!props.state.enableDragDrop &&  <p>Search for your fav movies. Judge them with only with buttons and not pop culture references!</p>}
    </header>
  );
}