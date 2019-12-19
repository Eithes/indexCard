import React, {useState, useEffect, useContext} from 'react';
import NavBar from '../layout/NavBar';
import Footer from '../layout/Footer';
import CardsField from './CardsField';
import {InitCardsContext} from '../contexts/initCards.context';
import './CardSet.scss';


function CardSet(props) {    
  const {
    initialCards, 
    changeShownCardColor,
    changeColorState, 
    findCurrentSet, 
    changeInitialCards 
  } = useContext(InitCardsContext);  

  const currentSet = findCurrentSet(props.setIndex);
  const currentCards = currentSet.cards;
  const [green, blue, red] = currentSet.colors;

  const [cards, setCards] = useState(currentCards);  
  const [pickedColor, setColor] = useState('all');
  const [completed, setCompleted] = useState(0);
 
  
  const countCompleted = () => {
    return currentCards.filter(card => card.color === green).length;
  } 
  
  const setPickedColor = (value) => {
    setColor(value);
    const filteredCards = changeColorState(props.setIndex, value);
    setCards(filteredCards);
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
    setTimeout(() => progress(currentCards.length, countCompleted()), 500);   
  }, [initialCards]);

  return (
    <div className="CardSet">
      <NavBar 
        setName={currentSet.setName}
        progress={completed}
        numOfCards={initialCards.length}
        numOfCompleted={countCompleted()}
        filterShownCards={setPickedColor}        
      />     
     <CardsField        
        colors={currentSet.colors}       
        cards={cards}   
        setIndex={props.setIndex}
        pickedColor={pickedColor}    
      />
     
      <Footer
        setName={currentSet.setName}
        emoji = {currentSet.emoji}
      />
    </div>
  );
}

export default CardSet;