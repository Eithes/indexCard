import React, {useContext} from 'react';
import Card from '../Card/Card';
import './CardsField.scss';
import ShownCardsContext from '../contexts/shownCards/shownCards.context';

function CardsField(props) { 

  console.log('field rendered');
  const { shownCards } = useContext(ShownCardsContext);

  const cardsToShow = shownCards.map(card => 
    <Card 
      color={card.color}
      key={card.id}
      changeCardColor={props.changeCardColor}
      setIndex={props.setIndex}
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