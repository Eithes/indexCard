import React, {useState, useEffect, useContext } from 'react';
import NavBar from '../layout/NavBar';
import Footer from '../layout/Footer';
import CardsField from './CardsField';
import {CardsContext} from '../contexts/cards.context';

import './CardSet.scss';

function CardSet(props) {  
  const [green, blue, red] = props.set.colors;
  const [ initialCards, changeInitialCards ] = useState(props.set.cards);
  const { cards, changeShownCardColor, changeColorState } = useContext(CardsContext); 
  const [pickedColor, setColor] = useState('all');
  const [completed, setCompleted] = useState(0);
  
  const countCompleted = () => {
    return initialCards.filter(card => card.color === green).length;
  }

  const changeCardColor = (id, value) => {
    // changing initial cards here too!!!   
    const newInitialCards = initialCards.map(card => id === card.id ? {...card, color: props.set.colors[value] } : card);
    changeInitialCards(newInitialCards);   
    changeShownCardColor(id, props.set.colors[value], pickedColor);   
  };
  
  const setPickedColor = (value) => {
    setColor(value);
    changeColorState(value, initialCards);
  };

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
        numOfCards={initialCards.length}
        numOfCompleted={countCompleted(cards)}
        filterShownCards={setPickedColor}        
      />
     
     <CardsField        
        colors={props.set.colors}
        changeCardColor={changeCardColor}     
      />
     
      <Footer
        setName={props.set.setName}
        emoji = {props.set.emoji}
      />
    </div>
  );
}

export default CardSet;