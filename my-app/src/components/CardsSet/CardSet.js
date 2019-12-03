import React, {useState, useEffect, } from 'react';
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

  const [cards, setCards] = useState(sortCardsByColor(props.cards));
 
  const toggleCard = (id, oldCards = cards) => {       
    const newCards = oldCards.map(card => id === card.id ? {...card, opened: !card.opened } : card);
    setCards(newCards);
  };

  const changeCardColor = (id, value) => {
    const newCards = cards.map(card => id === card.id ? {...card, color: props.colors[value] } : card);    
    const sortedCards = sortCardsByColor(newCards);
    setCards(sortedCards);
    setTimeout(() => toggleCard(id, sortedCards), 500);
  };
  
  // useEffect(() => {
    
  // }, [cards]);

  return (
    <div className="CardSet">
      <NavBar />     
      <CardsField 
        cards={cards} 
        colors={props.colors}
        toggleCard={toggleCard}
        changeCardColor={changeCardColor}
      />
      <Footer />
    </div>
  );
}

export default CardSet;