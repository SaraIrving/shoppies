# Shoppies Awards App
The Shoppies Awards app allows cinema savvy users to search for their favorite movies, nominate them for a Shoppie award and manage their nominations list. It was bootstrapped with creat-react-app. 

## Project Requirements
- Search results should come from OMDB's API (free API key: http://www.omdbapi.com/apikey.aspx).
- Each search result should list at least its title, year of release and a button to nominate that film.
- Updates to the search terms should update the result list
- Movies in search results can be added and removed from the nomination list.
- If a search result has already been nominated, disable its nominate button.
- Display a banner when the user has 5 nominations.

## Stretch Features
- Toggle between "modes", there is a "meme free" mode which is simple and showcases the basic project requirements but there is also a more whimsical default mode which allows the user to drag and drop their nominees to reorder then and uses comical memes wherever possible to add some fun to the experience. The drag and drop capabilities were added via react-beautiful-dnd. 
- I leveraged the react reveal library to add some animations to the app's Header and Alert components 

## Screenshots
### Toggle Between Basic Mode and Meme Mode!
!["modes"](https://raw.githubusercontent.com/SaraIrving/shoppies/master/public/images/modeToggle.png)

### Different Memes For Each Nominee 
!["Memes!"](https://raw.githubusercontent.com/SaraIrving/shoppies/master/public/images/memes.png)

### Nominate Buttons Are Disabled Once A Title Is Nominated
!["Nominate!"](https://raw.githubusercontent.com/SaraIrving/shoppies/master/public/images/disableNominate.png)

### Alert Once Five Titles Have Been Nominated
!["Alert!"](https://raw.githubusercontent.com/SaraIrving/shoppies/master/public/images/alert.png)


## Getting Started
- Run `npm install` or `yarn` to install the dependencies. Then run `npm start` or `yarn start`, and go to `localhost:3000` in your browser.

## Dependencies
  - testing-library/jest-dom: ^5.11.4
  - testing-library/react: ^11.1.0
  - testing-library/user-event: ^12.1.10
  - axios: ^0.21.1
  - react: ^17.0.1
  - react-beautiful-dn: "^13.0.0
  - react-dom: ^17.0.1
  - react-reveal: ^1.2.2
  - react-scripts: 4.0.1
  - web-vitals": 0.2.
