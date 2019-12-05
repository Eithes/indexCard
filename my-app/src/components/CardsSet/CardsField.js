import React from 'react';
import Card from '../Card/Card';
import './CardsField.scss';

function CardsField(props) {

  // проверить, есть ли в шоун  
  const cards = props.cards.map(card => 
    <Card 
      color={card.color}
      key={card.id} 
      toggleCard={props.toggleCard}
      changeCardColor={props.changeCardColor}
      {...card}  
    />
  )
  return (
    <div className="CardsField">
      {cards}
    </div>
  );
}

export default CardsField;