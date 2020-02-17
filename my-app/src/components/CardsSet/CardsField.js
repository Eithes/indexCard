import React, {useContext} from 'react';
import Card from '../Card/Card';
import './CardsField.scss';
import ShownCardsContext from '../contexts/shownCards/shownCards.context';
import CardsContext from '../contexts/cards/cards.context';
import GoBackCard from '../Card/GoBackCard';

function CardsField(props) { 

  const { shownCards, subTheme, } = useContext(ShownCardsContext);
  
  const drawCardsToShow = () => {
    let cardsToShow;
    if(subTheme !== '') {      
      const subThemeCardsToShow = shownCards.filter(card => card.subTheme === subTheme );          
      cardsToShow = subThemeCardsToShow.map(card => 
        <Card 
          color={card.color}
          key={card.id}
          changeCardColor={props.changeCardColor}
          setIndex={props.setIndex}
          {...card}
        />
      )   
    } else {
      cardsToShow = shownCards.map(card => 
        <Card 
          color={card.color}
          key={card.id}
          changeCardColor={props.changeCardColor}
          setIndex={props.setIndex}
          {...card}
        />
      )
    }
    return cardsToShow;
  }
  return (
    <main className="CardsField">
      {drawCardsToShow()}
      {subTheme !== '' && <GoBackCard />}
    </main>
  );
}

export default CardsField;