import { useState, useEffect } from 'react';
//import axios from 'axios';


export default function useAppData() {

  const [state, setState] = useState({
                                      searchValue: 'initial',
                                      resultsArray: []
                                    });

  return{
    state,
    setState
  };

}