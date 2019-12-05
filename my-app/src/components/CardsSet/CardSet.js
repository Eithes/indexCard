import React, {useState, useEffect } from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import CardsField from './CardsField';
import './CardSet.scss';

function CardSet(props) {

  const sortCardsByColor = (cards) => {
    const greenPack = cards.filter(card => card.color === props.colors[0]);
    const bluePack = cards.filter(card => card.color === props.colors[1]);
    const redPack = cards.filter(card => card.color === props.colors[2]);
    const newCards = [...greenPack, ...bluePack, ...redPack];
    return newCards;
  };

  const [cards, setCards] = useState(props.cards);
  const [shownCards, setShownCards] = useState(sortCardsByColor(props.cards)); 
 
  const [completed, setCompleted] = useState(0);  
  
  
  const countCompleted = (cards) => {
    return cards.filter(card => card.color === props.colors[0]).length;
  }

  const toggleCard = (id, oldCards = cards) => {       
    const newCards = oldCards.map(card => id === card.id ? {...card, opened: !card.opened } : card);
    setCards(newCards);
    setShownCards(newCards);
  };

  const changeCardColor = (id, value) => {
    const newCards = cards.map(card => id === card.id ? {...card, color: props.colors[value] } : card);
    const sortedCards = sortCardsByColor(newCards);
    setCards(sortedCards);
    setTimeout(() => toggleCard(id, sortedCards), 500);    
  }; 
  
  const sortCards = (value) => {
    let sortedCards;
    switch (value) {      
      case 'green':
        sortedCards = cards.filter(card => card.color === props.colors[0]);
        break;
      case 'blue':
          sortedCards = cards.filter(card => card.color === props.colors[1]);
        break;
      case 'red':
        sortedCards = cards.filter(card => card.color === props.colors[2]);
        break; 
      default: sortedCards = cards;
    }    
    const sortedIds = sortedCards.map(card => card.id);
    return sortedIds;
  }

  const changeShownCards = (value) => {
    const ids = sortCards(value);   
    console.log(ids);
    const newShownCards = cards.filter(card => ids.includes(card.id));
    setShownCards(sortCardsByColor(newShownCards));
  }

  function progress(numOfCards, completedCards) {
    setCompleted(() => {
      if (numOfCards === completedCards) {
        return 100;
      } else if(completedCards === 0) { 
        return 0 
      };      
      const diff = completedCards * 100 / numOfCards;      
      return diff;
    });
  }
  
  useEffect(() => {
    setTimeout(() => progress(cards.length, countCompleted(cards)), 500);  
    console.log(shownCards);
    console.log(cards);    
  }, [cards, shownCards]);

  return (
    <div className="CardSet">
      <NavBar 
        setName={props.setName}
        progress={completed}
        numOfCards={cards.length}
        numOfCompleted={countCompleted(cards)}
        changeShownCards={changeShownCards}
      />     
      <CardsField 
        cards={shownCards}              
        colors={props.colors}
        toggleCard={toggleCard}
        changeCardColor={changeCardColor}        
      />
      <Footer />
    </div>
  );
}

export default CardSet;