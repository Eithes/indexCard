import React, { useReducer, useState } from 'react';
import ShownCardsContext from './shownCards.context';
import shownCardsReducer from './shownCardsReducer.context';

import {
  FILTER_CARDS,
  OPEN_CARD,
  CLOSE_CARD,
  SET_COLOR,
} from '../../../types';

const ShownCardsState = props => {

  const initialState = {
    cards: props.set.cards || [],
    opened: false,
    currentCardId: null, 
    colorState: 'all',
  }
  const colors = {
    green: '#A1E48C', 
    blue: '#8cb7e4', 
    red: '#e4ae8c',
  }
  
  const [opened, setOpened] = useState(false);

  const [state, dispatch] = useReducer(shownCardsReducer, initialState);

  const sortCardsByColor = (cards) => {
    const greenPack = cards.filter(card => card.color === colors.green);
    const bluePack = cards.filter(card => card.color === colors.blue);
    const redPack = cards.filter(card => card.color === colors.red);
    const newCards = [...greenPack, ...bluePack, ...redPack];    
    return newCards;
  };

  const filterCardsByColor = (color = state.colorState, newCards = state.cards) => {
    let filteredCards;
      switch (color) {      
        case 'green':
        case '0':
          filteredCards = newCards.filter(card => card.color === colors.green);
          break;
        case 'blue':
        case '1':
          filteredCards = newCards.filter(card => card.color === colors.blue);
          break;
        case 'red':
        case '2':        
        filteredCards = newCards.filter(card => card.color === colors.red);
          break; 
        default: filteredCards = newCards;
    }
    console.log('filterCardsByColor');
    return filteredCards;
  };

  const setNewColorFilter = (value) => {
    dispatch({
      color: value,
    });
  }

  const filterByPickedColor = (color, newCards = state.cards) => { 
    let newFilteredCards;   
    if (color !== 'all' ) {
      newFilteredCards = filterCardsByColor(color, newCards);              
    } else {
      newFilteredCards = sortCardsByColor(newCards); 
    }
    console.log('filterByPickedColor');
    return newFilteredCards;
  };
  
  const openShownCard = (id) => {  
    dispatch({ type: OPEN_CARD, data: id});
  };
    
  const closeShownCard = (id) => {
    dispatch({ type: CLOSE_CARD });
    console.log('closeShownCard');
  };
    
  const changeColorState = (value = state.colorState, initCards) => {
    const filteredCards = filterByPickedColor(value, initCards);   
    dispatch({
      type: SET_COLOR,
      data: filteredCards,
      color: value,
    });
    console.log('changeColorState');
  };
  
  const changeShownCardColor = (id, value ) => {
    let newCards = state.cards.map(card => id === card.id ? {...card, color: value } : card); 
    const newFilteredCards = filterByPickedColor(state.colorState, newCards);
    console.log('changeShownCardColor');
    dispatch({
      type: FILTER_CARDS,
      data: newFilteredCards,
    });
    console.log('changeShownCardColor');
  };   

  
  return <ShownCardsContext.Provider
    value={{
      shownCards: sortCardsByColor(state.cards),
      opened: state.opened,
      currentCardId: state.currentCardId,
      colorState: state.colorState,
      openShownCard,
      closeShownCard,
      changeShownCardColor,
      changeColorState,
      setNewColorFilter,
    }}
  >
    {props.children}
  </ShownCardsContext.Provider>
}

export default ShownCardsState;