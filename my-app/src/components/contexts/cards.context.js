import React, { createContext } from 'react';
import useCardsState from '../hooks/useCardsState';
import startCards from '../../startCards';
import useInitialState from '../hooks/useInitialState';

export const CardsContext = createContext();
// export const InitCardsContext = createContext();

export function CardsProvider(props) {
  const { cards, toggleCard, changeShownCardColor, changeColorState } = useCardsState(props.default);
  // const [initialCards, changeInitialCards] = useInitialState(startCards);
  return (
    <CardsContext.Provider value={{cards, toggleCard, changeShownCardColor, changeColorState}}>
          {props.children}
      </CardsContext.Provider>
    
  )
}