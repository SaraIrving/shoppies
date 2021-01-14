import logo from './logo.svg';
import './App.css';
import SearchBox from './components/SearchBox';
import useAppData from './hooks/useAppData';
import ResultsList from './components/ResultsList';
import NominationsList from './components/NominationsList';

function App() {

  const { state, setState } = useAppData();

  console.log("state = ", state);

  return (
    <div className="App">
      <p>Shoppies App</p>
      <SearchBox state={state} setState={setState}></SearchBox>
      {state.enteredValue !== "initial" && <p>Search value in state = {state.enteredValue}</p>}
      {state.searchValue !== "" && <p>Search value in state = {state.searchValue}</p>}
      <div className="resultNomWrapper">
        <ResultsList state={state} setState={setState}></ResultsList>
        <NominationsList state={state} setState={setState}></NominationsList>
      </div>
    </div>
   
  );
}

export default App;
