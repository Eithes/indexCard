import React from 'react';
import Card from '../Card/Card';
import './CardsField.scss';

function CardsField(props) { 
  const cardsToShow = props.shownCards.map(card => 
    <Card 
      color={card.color}
      key={card.id}
      changeCardColor={props.changeCardColor}
      toggleCard={props.toggleCard}
      closeCard={props.closeCard}
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