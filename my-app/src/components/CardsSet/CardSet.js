import React, {useState, useEffect, useContext } from 'react';
import NavBar from '../layout/NavBar';
import Footer from '../layout/Footer';
import CardsField from './CardsField';
import CardsContext from '../contexts/cards/cards.context';
import ShownCardsContext from '../contexts/shownCards/shownCards.context';
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
  const {
    changeShownCardColor, 
    changeColorState, 
    closeShownCard
  } = useContext(ShownCardsContext);
  const [progress, setProgress] = useState(0);

  const changeCardColor = (id, value) => {
    const newCardsSet = currentSet.map(card => id === card.id ? {...card, color: colors[value] } : card);
    changeShownCardColor(id, colors[value]);
    setTimeout(() => {
      closeShownCard();
    }, 500);
    changeCards(setIndex, newCardsSet);
  };

  const setNewColorFilter = (value) => {
    const currentCards = [...currentSet];
    changeColorState(value, currentCards);    
  }

  const countCompleted = () => {
    return currentSet.filter(card => card.color === colors.green).length;
  }

  function countProgress(numOfCards, completedCards) {
    setProgress(() => {
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
    setTimeout(() => countProgress(currentSet.length, countCompleted()), 1000);
  }, [cards]); 
  

  return (
    <div className="CardSet">
      <NavBar 
        setName={props.set.setName}
        progress={progress}
        numOfCards={currentSet.length}
        numOfCompleted={countCompleted(currentSet)}
        filterShownCards={setNewColorFilter}        
      />
        
     <CardsField        
        colors={props.set.colors}  
        changeCardColor={changeCardColor}
        setIndex={setIndex}      
      />
     
      <Footer
        setName={props.set.setName}
        emoji = {props.set.emoji}
      />
    </div>
  );
}

export default CardSet;