import React, { createContext, useState } from 'react';
import startCards from '../../startCards';
import useInitialState from '../hooks/useInitialState';
import useCardsState from '../hooks/useCardsState';


export const InitCardsContext = createContext();

export function InitCardsProvider(props) {  
  const {initialCards, toggleCard, changeShownCardColor, changeColorState, findCurrentSet, sortCardsByColor,filterByPickedColor } = useCardsState(startCards);
 
  return (
    <InitCardsContext.Provider value={{initialCards, toggleCard, changeShownCardColor, changeColorState , findCurrentSet, filterByPickedColor, sortCardsByColor }} >   
        {props.children}
    </InitCardsContext.Provider>
  );
};
