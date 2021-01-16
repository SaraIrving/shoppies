import logo from './logo.svg';
import './App.css';
import SearchBox from './components/SearchBox';
import useAppData from './hooks/useAppData';
import ResultsList from './components/ResultsList';
import NominationsList from './components/NominationsList';
import Bounce from 'react-reveal/Bounce';
import { DragDropContext } from "react-beautiful-dnd";

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
        <input type="radio" value="DNDRadio" checked={state.enableDragDrop} readOnly={true} onClick={event => setState(prev => ({...prev, enableDragDrop: !prev.enableDragDrop}))}></input>
      </div>
      
      {/* {state.enteredValue !== "initial" && <p>Search value in state = {state.enteredValue}</p>}
      {state.searchValue !== "" && <p>Search value in state = {state.searchValue}</p>} */}
      {state.nominationsArray.length >= 5 && <Bounce><p>NOminations list is full! Remove some if you want to nominate more</p></Bounce>}


      {!state.enableDragDrop && <div className="resultNomWrapper">
                                  <ResultsList state={state} setState={setState}></ResultsList>
                                  <NominationsList state={state} setState={setState}></NominationsList>
                                </div>}
      {state.enableDragDrop && <DragDropContext>
                                  <p>drag and drop happening</p>
                                  <div className="resultNomWrapper">
                                    <ResultsList state={state} setState={setState} droppableId="results" listItemType="results"></ResultsList>
                                    <NominationsList state={state} setState={setState} droppableId="nominations" listItemType="nominations"></NominationsList>
                                  </div>
                                </DragDropContext>}
    </div>
   
  );
}

export default App;
