import logo from './logo.svg';
import './App.css';
import SearchBox from './components/SearchBox';
import useAppData from './hooks/useAppData';

function App() {

  const { state, setState } = useAppData();

  console.log("state = ", state);

  return (
    <div className="App">
      <p>Shoppies App</p>
      <SearchBox state={state} setState={setState}></SearchBox>
      {state.enteredValue !== "initial" && <p>Search value in state = {state.enteredValue}</p>}
      {state.searchValue !== "" && <p>Search value in state = {state.searchValue}</p>}
      {state.resultsArray.length !== 0 && <p> api result = {state.resultsArray[0].Title}</p>}
    </div>
   
  );
}

export default App;
