import React, {useContext} from 'react';
import Card from '../Card/Card';
import {CardsContext} from '../contexts/cards.context';
import './CardsField.scss';

function CardsField(props) { 
  const cardsToShow = props.cards.map(card => 
    <Card 
      color={card.color}
      key={card.id}
      changeCardColor={props.changeCardColor}
      toggleCard={props.toggleCard}
      {...card}
    />
  )
  return (
    <main className="CardsField">
      {cardsToShow}
    </main>
  );
}

export default CardsField;