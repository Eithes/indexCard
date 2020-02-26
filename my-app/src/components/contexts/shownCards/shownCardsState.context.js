import React, { useReducer, } from 'react';
import PropTypes from 'prop-types';
import ShownCardsContext from './shownCards.context';
import shownCardsReducer from './shownCardsReducer.context';
import colors from '../../library/colors';

import {
  FILTER_CARDS,
  OPEN_CARD,
  CLOSE_CARD,
  SET_COLOR,
  SET_SUBTHEME,
} from '../../../types';

const ShownCardsState = props => {  
  const initialState = {
    cards: props.cards || [],
    opened: false,
    currentCardId: null,
    colorState: 'all',
    subTheme: '',
  }
  
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
          filteredCards = newCards.filter(card => card.color === colors.green);
          break;
        case 'blue':       
          filteredCards = newCards.filter(card => card.color === colors.blue);
          break;
        case 'red':       
        filteredCards = newCards.filter(card => card.color === colors.red);
          break; 
        default: filteredCards = newCards;
    }
   
    return filteredCards;
  };

  const openShownCard = (id) => {  
    dispatch({ type: OPEN_CARD, data: id});
  };    
  const closeShownCard = () => {
    dispatch({ type: CLOSE_CARD });    
  };
    
  const changeColorState = (value, currentCards) => {
    const filteredCards = filterCardsByColor(value, currentCards);  
    dispatch({
      type: SET_COLOR,
      data: filteredCards,
      color: value,
    });  
  };
  
  const changeShownCardColor = (id, value ) => {
    let newCards = state.cards.map(card => id === card.id ? {...card, color: value } : card); 
    const newFilteredCards = filterCardsByColor(state.colorState, newCards);
    dispatch({
      type: FILTER_CARDS,
      data: newFilteredCards,
    });
  };
  
  const setSubTheme = (subtheme) => {
    dispatch({
      type: SET_SUBTHEME,
      data: subtheme,
    });
  }

  return <ShownCardsContext.Provider
    value={{
      shownCards: sortCardsByColor(state.cards),
      opened: state.opened,
      currentCardId: state.currentCardId,
      colorState: state.colorState,
      subTheme: state.subTheme,
      openShownCard,
      closeShownCard,
      changeShownCardColor,
      changeColorState,
      setSubTheme,  
    }}
  >
    {props.children}
  </ShownCardsContext.Provider>
}


ShownCardsState.propTypes = {
  setOfCards: PropTypes.array.isRequired,
};


export default ShownCardsState;