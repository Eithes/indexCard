import React, {useState, useEffect, useContext } from 'react';
import NavBar from '../layout/NavBar';
import Footer from '../layout/Footer';
import CardsField from './CardsField';
import useShownCardsState from '../hooks/useShownCardsState';
import {CardsContext} from '../contexts/cards.context';

import './CardSet.scss';

function CardSet(props) {
  const colors = {
    green: '#A1E48C', 
    blue: '#8cb7e4', 
    red: '#e4ae8c',
  } 
  const setIndex = props.setIndex;

  const { initialCards, changeInitialCards } = useContext(CardsContext);
  const currentInitialSet = initialCards[setIndex].cards;
  const { cards, changeShownCardColor, changeColorState, toggleCard } = useShownCardsState(currentInitialSet);

  const [pickedColor, setColor] = useState('all');
  const [completed, setCompleted] = useState(0);

  const changeCardColor = (id, value) => {
    // changing initial cards here too!!!   
    const newInitialCardsSet = currentInitialSet.map(card => id === card.id ? {...card, color: colors[value] } : card);
    console.log(setIndex);
    console.log(initialCards[setIndex]);
    changeInitialCards(setIndex, newInitialCardsSet);
    changeShownCardColor(id, colors[value], pickedColor);   
  };
  
  const setPickedColor = (value) => {
    setColor(value);
    changeColorState(value, currentInitialSet);
  };

  const countCompleted = () => {
    return currentInitialSet.filter(card => card.color === colors.green).length;
  }

  function progress(numOfCards, completedCards) {
    setCompleted(() => {
      if (numOfCards === completedCards) {
        return 100;
      } else if(completedCards === 0) {
        return 0;
      };      
      const diff = completedCards * 100 / numOfCards;      
      return diff;
    });
  }

  useEffect(() => {
    setTimeout(() => progress(initialCards.length, countCompleted()), 500);   
  }, [initialCards]);

  return (
    <div className="CardSet">
      <NavBar 
        setName={props.set.setName}
        progress={completed}
        numOfCards={currentInitialSet.length}
        numOfCompleted={countCompleted(currentInitialSet)}
        filterShownCards={setPickedColor}        
      />
     
     <CardsField        
        colors={props.set.colors}
        changeCardColor={changeCardColor}
        toggleCard={toggleCard}
        cards={cards}        
      />
     
      <Footer
        setName={props.set.setName}
        emoji = {props.set.emoji}
      />
    </div>
  );
}

export default CardSet;