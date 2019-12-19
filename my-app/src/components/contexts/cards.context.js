import React, { createContext } from 'react';
import useCardsState from '../hooks/useCardsState';

export const CardsContext = createContext();

export function CardsProvider(props) {
  const { cards, toggleCard, changeShownCardColor, changeColorState } = useCardsState(props.default);
  return (
    <CardsContext.Provider value={{cards, toggleCard, changeShownCardColor, changeColorState}}>
        {props.children}
    </CardsContext.Provider>
  )
}