import React, {useState, useEffect, useContext } from 'react';
import CardsField from './CardsField';
import CardsContext from '../contexts/cards/cards.context';
import ShownCardsContext from '../contexts/shownCards/shownCards.context';
import './CardSet.scss';
import CardForm from '../Forms/editAddCardForm';

function CardSet(props) {
  const colors = {
    green: '#A1E48C', 
    blue: '#8cb7e4',
    red: '#e4ae8c',
  }
  const setIndex = props.setIndex;
  const { 
    cards, 
    changeCards, 
    getDataForSetNavbar, 
    changeIndex,
    colorFilter,
  } = useContext(CardsContext);
  const currentSet = cards[setIndex].cards;  
  const {
    shownCards,
    changeShownCardColor, 
    changeColorState, 
    closeShownCard
  } = useContext(ShownCardsContext);

  const changeCardColor = (id, value) => {
    const newCardsSet = currentSet.map(card => id === card.id ? {...card, color: colors[value] } : card);
    changeShownCardColor(id, colors[value]);
    setTimeout(() => {
      closeShownCard();
    }, 500);
    changeCards(setIndex, newCardsSet);
  };
  
  useEffect(() => {
    changeIndex(setIndex);
    getDataForSetNavbar(setIndex);
  }, []);

   useEffect(() => {
    setTimeout(() => getDataForSetNavbar(setIndex), 1000);
    changeColorState(colorFilter, currentSet);
  }, [cards, currentSet]);

  useEffect(() => {
    changeColorState(colorFilter, currentSet);
  }, [colorFilter]);  

  return (
    <div className='CardSet'>        
     <CardsField        
        colors={props.set.colors}  
        changeCardColor={changeCardColor}
        setIndex={setIndex}      
      />
      <CardForm />    
    </div>
  );
}

export default CardSet;