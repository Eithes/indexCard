import React, { createContext } from 'react';
import startCards from '../../../startCards';
import useCardsState from '../../hooks/useCardsState';

export const CardsContext = createContext();

export function CardsProvider(props) {

  const { cards, changeCards } = useCardsState(startCards);

  return (
    <CardsContext.Provider value={{ cards, changeCards }} >
        {props.children}
    </ CardsContext.Provider>
  )
}