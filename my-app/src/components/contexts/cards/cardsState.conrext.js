import React, { useReducer } from 'react';
import CardsContext from './cards.context';
import cardsReducer from './cardsReducer.context';
import {  
} from '../types';

const CardsState = props => {
  const initialCards = {
    cards: [],   // from LS || []
  }

  const [state, dispatch] = useReducer(cardsReducer, initialState);

  // const setLoading 
  //getCards from LS

  // const searchUsers = async (text) => {
  //   setLoading();
  //   const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);   
  //   dispatch({
  //     type: SEARCH_USERS,
  //     payload: res.data.items,
  //   });
  // };

  // const setLoading = () => dispatch({ type: SET_LOADING })
  
  return <CardsContext.Provider 
    value={{
      cards:state.cards,      
      loading:state.loading,      
      getCards,
      changeCards,
    }}
  >
    {props.children}
  </CardsContext.Provider>
}

export default CardsState;