import React, {useState, useEffect, } from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import CardsField from './CardsField';
import './CardSet.scss';

function CardSet(props) {
  const [cards, setCards] = useState(props.cards);
  
  const startCards = () => {
    const greenPack = cards.filter(card => card.color === props.colors[0]);
    const bluePack = cards.filter(card => card.color === props.colors[1]);
    const redPack = cards.filter(card => card.color === props.colors[2]);
    const newCards = [...greenPack, ...bluePack, ...redPack];  
    setCards(newCards);
  };
 
  const toggleCard = (id, oldCards = cards) => {       
    const newCards = oldCards.map(card => id === card.id ? {...card, opened: !card.opened } : card);    
    setCards(newCards);
  };

  const changeCardColor = (id, value) => {
    const newCards = cards.map(card => id === card.id ? {...card, color: props.colors[value] } : card);    
    setCards(newCards);
    setTimeout(() => toggleCard(id, newCards), 500);
  };
  
  useEffect(() => {
    startCards();
  }, []);

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