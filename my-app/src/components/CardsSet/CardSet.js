import React, {useState, useEffect } from 'react';
import NavBar from '../layout/NavBar';
import Footer from '../layout/Footer';
import CardsField from './CardsField';
import './CardSet.scss';

function CardSet(props) {  
  const [green, blue, red] = props.set.colors;
  const [ initialCards, changeInitialCards ] = useState(props.set.cards);

  const sortCardsByColor = (cards) => {
    const greenPack = cards.filter(card => card.color === green);
    const bluePack = cards.filter(card => card.color === blue);
    const redPack = cards.filter(card => card.color === red);
    const newCards = [...greenPack, ...bluePack, ...redPack];
    return newCards;
  };

  const filterCardsByColor = (color, newCards = initialCards) => {
    let sortedCards;
    switch (color) {      
      case 'green':
      case '0':
        sortedCards = newCards.filter(card => card.color === green);
        break;
      case 'blue':
      case '1':
        sortedCards = newCards.filter(card => card.color === blue);
        break;
      case 'red':
      case '2':        
        sortedCards = newCards.filter(card => card.color === red);
        break; 
      default: sortedCards = newCards;
    }   
    return sortedCards;
  }

  const [cards, setCards] = useState(sortCardsByColor(initialCards));
  const [pickedColor, setColor] = useState('all');
  const [completed, setCompleted] = useState(0);

  const countCompleted = () => {
    return initialCards.filter(card => card.color === green).length;
  }

  const toggleCard = (id, oldCards = cards) => {    
    const newCards = oldCards.map(card => id === card.id ? {...card, opened: !card.opened } : card);
    const newFilteredCards = filterByPickedColor(pickedColor, newCards);      
    setCards(newFilteredCards);    
  };

  const changeCardColor = (id, value) => {
    //changing initial cards here too!!!   
    const newInitialCards = initialCards.map(card => id === card.id ? {...card, color: props.set.colors[value] } : card);
    changeInitialCards(newInitialCards);

    let newCards = cards.map(card => id === card.id ? {...card,color: props.set.colors[value] } : card);
    if (pickedColor === 'all' ) { 
      newCards = filterByPickedColor(pickedColor, newCards);
      setCards(newCards);
    }
    setCards(newCards);
    setTimeout(() => toggleCard(id, newCards), 500);
  };

  const filterByPickedColor = (color = pickedColor, newCards = initialCards) => { 
    if (color !== 'all' ) {
      newCards = filterCardsByColor(color, newCards); 
    }
       newCards = sortCardsByColor(newCards); 
    return newCards;
  }
  
  const setPickedColor = (value) => {
    setColor(value);
    changeColorState(value);
  }

  const changeColorState = (value) => {
    const filteredCards = filterByPickedColor(value);
    setCards(filteredCards);
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
        numOfCards={initialCards.length}
        numOfCompleted={countCompleted(cards)}
        filterShownCards={setPickedColor}        
      />     
      <CardsField 
        cards={cards}
        colors={props.set.colors}
        toggleCard={toggleCard}
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