import React, { useReducer } from 'react';
import CardsContext from './cards.context';
import cardsReducer from './cardsReducer.context';
import startCards from '../../../startCards';
import {  
  SET_LOADING,
  CHANGE_CARDS,
} from '../../../types';

const CardsState = props => {
  const initialState = {
    cards: startCards || [],   // from LS || []
    loading: false,
  }

  const [state, dispatch] = useReducer(cardsReducer, initialState);

  const setLoading = () => dispatch({ type: SET_LOADING });

  // const getCards = () => {
  //   setLoading();
  //   //get from ls
  //   dispatch({ type: GET_CARDS, data: 'cardsFromLS' })
  // }

  //delete card
  //edit card

   const changeCards = (setIndex, newCards) => {     
      const targetSet = state.cards[setIndex];
      const newSet = {...targetSet, cards: [...newCards]};
      const newSets = state.cards.slice();
      newSets[setIndex] = newSet;
      dispatch({ type: CHANGE_CARDS, data: newSets, });
    }
  
  return <CardsContext.Provider 
    value={{
      cards: state.cards,
      loading: state.loading,
      // getCards,
      changeCards,
    }}
  >
    {props.children}
  </CardsContext.Provider>
}

export default CardsState;