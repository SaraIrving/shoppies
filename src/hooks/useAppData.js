import { useState, useEffect } from 'react';
import axios from 'axios';


export default function useAppData() {

  const [state, setState] = useState({
                                      enteredValue: 'initial',
                                      searchValue: '',
                                      resultsArray: []
                                    });

  useEffect(() => {
    axios.get(`http://www.omdbapi.com/?apikey=bb6449b7&s=${state.searchValue}`)
    .then((response) => {
      console.log("response.data  = ", response.data.Search)
      //now use the data to set the results list in the state!
    })

  }, [state.searchValue])

  return{
    state,
    setState
  };

}