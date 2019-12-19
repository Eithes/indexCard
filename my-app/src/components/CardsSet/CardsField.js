import React, {useContext} from 'react';
import Card from '../Card/Card';
import {CardsContext} from '../contexts/cards.context';
import './CardsField.scss';
import {InitCardsContext} from '../contexts/initCards.context';

function CardsField(props) { 

  const { filterByPickedColor } = useContext(InitCardsContext);
  

  // проверить, есть ли в шоун  
  // const { cards } = use top cards, all of them
  // const filter = use filter from context
  // cardsToShow = cars.filter(filter).map(blahblah);
  
  const sortedCards = filterByPickedColor(props.setIndex, props.pickedColor, props.cards)
  console.log(props.cards)
  const cardsToShow = sortedCards.map(card => 
    <Card 
      color={card.color}
      key={card.id}
      setIndex={props.setIndex}
      pickedColor={props.pickedColor}        
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