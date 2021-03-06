import { useState, useEffect } from 'react';
import axios from 'axios';


export default function useAppData() {

  const [state, setState] = useState({
                                      enteredValue: 'initial',
                                      searchValue: '',
                                      resultsArray: [],
                                      nominationsArray: [],
                                      enableDragDrop: true
                                    });

  useEffect(() => {
    axios.get(`https://www.omdbapi.com/?apikey=bb6449b7&type=movie&s=${state.searchValue}`)
    .then((response) => {
      //now use the data to set the results list in the state!

      //isolate the first 5 responses
      const results = response.data.Search.slice(0, 5)
      setState(prev => ({...prev, resultsArray: results}));
    })
    .catch(error => console.log(error));

  }, [state.searchValue])

  return{
    state,
    setState
  };

}