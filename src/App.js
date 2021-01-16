import logo from './logo.svg';
import './App.css';
import SearchBox from './components/SearchBox';
import useAppData from './hooks/useAppData';
import ResultsList from './components/ResultsList';
import NominationsList from './components/NominationsList';
import Bounce from 'react-reveal/Bounce';

function App() {

  const { state, setState } = useAppData();

  console.log("state = ", state);

  return (
    <div className="App">
      <p>Shoppies App</p>
      <SearchBox state={state} setState={setState}></SearchBox>
      <div>
        <label>Enable Drag and drop feature to rank nominees
        </label>
        <input type="radio" value="DNDRadio" checked={state.enableDragDrop} value="DND" onClick={event => setState(prev => ({...prev, enableDragDrop: !prev.enableDragDrop}))}></input>

      </div>
      
      {/* {state.enteredValue !== "initial" && <p>Search value in state = {state.enteredValue}</p>}
      {state.searchValue !== "" && <p>Search value in state = {state.searchValue}</p>} */}
      {state.nominationsArray.length >= 5 && <Bounce><p>NOminations list is full! Remove some if you want to nominate more</p></Bounce>}
      <div className="resultNomWrapper">
        <ResultsList state={state} setState={setState}></ResultsList>
        <NominationsList state={state} setState={setState}></NominationsList>
      </div>
    </div>
   
  );
}

export default App;
