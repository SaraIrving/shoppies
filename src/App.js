import logo from './logo.svg';
import './App.css';
import SearchBox from './components/SearchBox';
import Alert from './components/Alert';
import Header from './components/Header';
import Footer from './components/Footer';
import useAppData from './hooks/useAppData';
import ResultsList from './components/ResultsList';
import NominationsList from './components/NominationsList';
import { DragDropContext } from "react-beautiful-dnd";

function App() {

  const { state, setState } = useAppData();


  const handleOnDragEnd = function(result) {


    //if you try to drag an element outside of the DragDropContext
    if(!result.destination) {
      console.log("Cant drop here!")
      return;
    }

    // drag movies within the nominations list
    if (result.destination.droppableId === "nominations" && result.source.droppableId === "nominations") {
      const items = Array.from(state.nominationsArray.slice(0));
      const [reorderedItem] = items.splice(result.source.index, 1);
      items.splice(result.destination.index, 0, reorderedItem);
      setState(prev => {return {...prev, nominationsArray: items}})
    }

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
