import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import Card from '../Card/Card';
import './CardsField.scss';
import ShownCardsContext from '../contexts/shownCards/shownCards.context';
import GoBackButton from './GoBackButton';

function CardsField(props) { 
  const { shownCards, subTheme, } = useContext(ShownCardsContext);
    
  const drawCardsToShow = () => {
    const cardsToShow = shownCards.filter(card => (subTheme === '' || card.subTheme === subTheme) );
    const cardsToShowRender = cardsToShow.map(card => 
        <Card 
          color={card.color}
          key={card.id}
          changeCardColor={props.changeCardColor}
          setIndex={props.setIndex}
          {...card}
        />
    );
    return cardsToShowRender;
  }
  
  return (
    <main className="CardsField">
      {drawCardsToShow()}
      {subTheme !== '' && <GoBackButton />}
    </main>
  );
}

CardsField.propTypes = {
  setIndex: PropTypes.number.isRequired,  
  changeCardColor: PropTypes.func.isRequired,
};

export default CardsField;