import React, {useState, useEffect, useContext } from 'react';
import NavBar from '../layout/NavBar';
import Footer from '../layout/Footer';
import CardsField from './CardsField';
import useShownCardsState from '../hooks/useShownCardsState';
import {CardsContext} from '../contexts/cards/cards.context';

import './CardSet.scss';

function CardSet(props) {
  const colors = {
    green: '#A1E48C', 
    blue: '#8cb7e4', 
    red: '#e4ae8c',
  } 
  const setIndex = props.setIndex;

  const { cards, changeCards } = useContext(CardsContext);
  const currentSet = cards[setIndex].cards;
  const { shownCards, changeShownCardColor, changeColorState, toggleShownCard, closeShownCard} = useShownCardsState(currentSet);

  const [pickedColor, setColor] = useState('all');
  const [completed, setCompleted] = useState(0);

  const changeCardColor = (id, value) => {  
    // changing initial cards here too!!!   
    const newCardsSet = currentSet.map(card => id === card.id ? {...card, color: colors[value] } : card);  
    changeCards(setIndex, newCardsSet);
    changeShownCardColor(id, colors[value], pickedColor);   
  };
  
  const setPickedColor = (value) => {
    setColor(value);
    changeColorState(value, currentSet);
  };

  const countCompleted = () => {
    return currentSet.filter(card => card.color === colors.green).length;
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
    setTimeout(() => progress(shownCards.length, countCompleted()), 500);
  }, [shownCards]);

  return (
    <div className="CardSet">
      <NavBar 
        setName={props.set.setName}
        progress={completed}
        numOfCards={currentSet.length}
        numOfCompleted={countCompleted(currentSet)}
        filterShownCards={setPickedColor}        
      />
     
     <CardsField        
        colors={props.set.colors}
        changeCardColor={changeCardColor}
        toggleCard={toggleShownCard}
        closeCard={closeShownCard}
        shownCards={shownCards}        
      />
     
      <Footer
        setName={props.set.setName}
        emoji = {props.set.emoji}
      />
    </div>
  );
}

export default CardSet;