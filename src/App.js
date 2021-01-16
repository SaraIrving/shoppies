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

  const handleOnDragEnd = function(result) {
    //if you try to drag an element outside of the DragDropContext
    if(!result.destination) {
      return;
    }

    // if you are drag and dropping within the results list
    if (result.destination.droppableId === "results" && result.source.droppableId === "results") {
      const items = Array.from(state.resultsArray);
      const [reorderedItem] = items.splice(result.source.index, 1);
      items.splice(result.destination.index, 0, reorderedItem);
      setState(prev => {return {...prev, resultsArray: items}})

    // if you are drag and dropping within the nominations list
    } else if (result.destination.droppableId === "nominations" && result.source.droppableId === "nominations") {
      const items = Array.from(state.nominationsArray);
      const [reorderedItem] = items.splice(result.source.index, 1);
      items.splice(result.destination.index, 0, reorderedItem);
      setState(prev => {return {...prev, nominationsArray: items}})

    // if you are drag and dropping from results to nominations
    } else if (result.destination.droppableId !== result.source.droppableId) {
      console.log("you're switching LISTS!!")
      if (result.destination.droppableId === "nominations") {
        const items = Array.from(state.nominationsArray);
        const [reorderedItem] = state.resultsArray.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem)
        setState(prev => {return {...prev, nominationsArray: items}})
      }
    }

  };

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
      {state.enableDragDrop && <DragDropContext onDragEnd={handleOnDragEnd}>
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
