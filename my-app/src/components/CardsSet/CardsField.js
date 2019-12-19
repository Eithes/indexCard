import React, {useContext} from 'react';
import Card from '../Card/Card';
import {CardsContext} from '../contexts/cards.context';
import './CardsField.scss';

function CardsField(props) {
  const { cards } = useContext(CardsContext);
  // проверить, есть ли в шоун 
  
  // const { cards } = use top cards, all of them
  // const filter = use filter from context
  // cardsToShow = cars.filter(filter).map(blahblah);
  
  const cardsToShow = cards.map(card => 
    <Card 
      color={card.color}
      key={card.id}
      changeCardColor={props.changeCardColor}
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