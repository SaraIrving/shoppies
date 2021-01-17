# Shoppies App:

## Requirements: 
1. Search results should come from OMDB's API (free API key: http://www.omdbapi.com/apikey.aspx).
2. Each search result should list at least its title, year of release and a button to nominate that film.
3. Updates to the search terms should update the result list
4. Movies in search results can be added and removed from the nomination list.
5. If a search result has already been nominated, disable its nominate button.
6. Display a banner when the user has 5 nominations.

## Stretch Ideas: 
* Provided: 
  * Save nomination lists if the user leaves the page
  * Animations for loading, adding/deleting movies, notifications
    * look at react-reveal library!
  * Create shareable links
* My Ideas: 
  * Autocomplete option for the search box
    * consider building on the autocomplete component in react-bootstrap library 
  * Bring in drag and drop feature for moving movies from one list to another in addition to having buttons
    * leverage the react beautiful d n d library for simple drag and drop functionality??

## Research 
* Resources to help with form set up: 
  - https://medium.com/swlh/building-controlled-forms-using-functional-components-in-react-965d033a89bd
* Form submit on pressing Enter key:
  - https://reactgo.com/react-trigger-button-click/
* Building and Styling Radio Buttons
  - http://react.tips/radio-buttons-in-reactjs/
  - https://stackoverflow.com/questions/4641752/css-how-to-style-a-selected-radio-buttons-label
  - 
* Styling input elements
  - https://css-tricks.com/almanac/selectors/p/placeholder/
  - https://www.w3docs.com/snippets/css/how-to-remove-and-style-the-border-outline-around-text-input-boxes-in-google-chrome.html
* Adding images in React (not in the Public folder)
  - https://create-react-app.dev/docs/using-the-public-folder/
* Fun meme images
  - https://www.stickpng.com/
  


## Components list
* SearchBox
  * AutocompleteBox?
* ResultsBox
  * Movie
  * MovieList
* NominationsList (will also hold movie components)
* Button
* NotificationBanner  