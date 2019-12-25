import React, { createContext } from 'react';
import startCards from '../../startCards';
import useCardsState from '../hooks/useCardsState';

export const CardsContext = createContext();

export function CardsProvider(props) {

  const { initialCards, changeInitialCards } = useCardsState(startCards);

  return (
    <CardsContext.Provider value={{initialCards, changeInitialCards}} >
        {props.children}
    </ CardsContext.Provider>
  )
}