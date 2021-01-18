import logo from './logo.svg';
import './App.css';
import SearchBox from './components/SearchBox';
import Alert from './components/Alert';
import Header from './components/Header';
import Footer from './components/Footer';
import useAppData from './hooks/useAppData';
import ResultsList from './components/ResultsList';
import NominationsList from './components/NominationsList';
import Bounce from 'react-reveal/Bounce';
import Flash from 'react-reveal/Flash';
import { DragDropContext } from "react-beautiful-dnd";

function App() {

  const { state, setState } = useAppData();

  console.log("state = ", state);

  const handleOnDragEnd = function(result) {

    console.log("RESULT DRAG END  = ", result);

    //if you try to drag an element outside of the DragDropContext
    if(!result.destination) {
      console.log("Cant drop here!")
      return;
    }

    if (result.destination.droppableId === "nominations" && result.source.droppableId === "nominations") {
      const items = Array.from(state.nominationsArray.slice(0));
      const [reorderedItem] = items.splice(result.source.index, 1);
      items.splice(result.destination.index, 0, reorderedItem);
      setState(prev => {return {...prev, nominationsArray: items}})
    }

    // // if you are drag and dropping within the results list
    // if (result.destination.droppableId === "results" && result.source.droppableId === "results") {
    //   // const items = Array.from(state.resultsArray);
    //   const items = state.resultsArray.slice(0);
    //   const [reorderedItem] = items.splice(result.source.index, 1);
    //   items.splice(result.destination.index, 0, reorderedItem);
    //   setState(prev => {return {...prev, resultsArray: items}})

    // // if you are drag and dropping within the nominations list
    // } else if (result.destination.droppableId === "nominations" && result.source.droppableId === "nominations") {
    //   const items = Array.from(state.nominationsArray.slice(0));
    //   const [reorderedItem] = items.splice(result.source.index, 1);
    //   items.splice(result.destination.index, 0, reorderedItem);
    //   setState(prev => {return {...prev, nominationsArray: items}})

    // // if you are drag and dropping from results to nominations
    // } else if (result.destination.droppableId !== result.source.droppableId) {
    //   console.log("you're switching LISTS!!")
    //   console.log("source - ", result.source.droppableId)
    //   console.log("destination - ", result.destination.droppableId)
    //   if (result.destination.droppableId === "nominations") {
    //     console.log("putting it in NOMS")
    //     // const items = Array.from(state.nominationsArray);
    //     // destination has a droppableID and an index
    //     // source has a droppableId and an index 
    //     // leverage these to update state
    //       // cut the dragged movie out of results state and add to nom state

    //     // crate a copy of nom state array  
    //     const items = state.nominationsArray.slice(0);

    //     // pull out moved item from results state 
    //     const [reorderedItem] = state.resultsArray.splice(result.source.index, 1);

    //     // put moved item into copy of nom state array
    //     items.splice(result.destination.index, 0, reorderedItem)
    //     console.log("UPDATED noms = ", items);

    //     // now make a copy of the results state before the removed item
    //     const newResutls1 = state.resultsArray.slice(0, result.source.index);
    //     console.log("Newresults1 = ", newResutls1)
    //     const newResutls2 = state.resultsArray.slice(result.source.index);
    //     console.log("newResults2 = ", newResutls2);
    //     const updatedResults =newResutls1.concat(newResutls2);
    //     console.log("updatedResults = ", updatedResults)


    //     // update both nom and results state 
    //     setState(prev => {return {...prev, nominationsArray: items, resultsArray: updatedResults}})


    //   } else if (result.destination.droppableId === "results") {
    //     console.log("Youre putting it in RESULTS")
    //   }
    // }

  };

  return (
    <div className="App">
      <Header state={state}></Header>
      <div className="appBody">
        <SearchBox state={state} setState={setState}></SearchBox>
        <div className="radioWrapper">
          <input id="dndRadio" type="radio" value="DNDRadio" checked={!state.enableDragDrop} readOnly={true} onClick={event => setState(prev => ({...prev, enableDragDrop: !prev.enableDragDrop}))}></input>
          <label for="dndRadio">
            <span className="radioSpan">Enable "meme free" mode for a boring by the specifications app</span>
          </label>
        </div>
        {state.nominationsArray.length >= 5 && <Alert state={state}></Alert>}


        {!state.enableDragDrop && <div className="resultNomWrapper">
                                    <ResultsList state={state} setState={setState}></ResultsList>
                                    <NominationsList state={state} setState={setState}></NominationsList>
                                  </div>}
        {state.enableDragDrop && <DragDropContext onDragEnd={handleOnDragEnd}>
                                    <div className="resultNomWrapper">
                                      <ResultsList state={state} setState={setState} droppableId="results" listItemType="results"></ResultsList>
                                      <NominationsList state={state} setState={setState} droppableId="nominations" listItemType="nominations"></NominationsList>
                                    </div>
                                  </DragDropContext>}
    </div>
    <Footer></Footer>
    </div>
   
  );
}

export default App;
