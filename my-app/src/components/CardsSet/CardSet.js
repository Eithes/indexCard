import React, { useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import CardsField from './CardsField';
import CardsContext from '../contexts/cards/cards.context';
import ShownCardsContext from '../contexts/shownCards/shownCards.context';
import './CardSet.scss';
import CardForm from '../Forms/editAddCardForm';
import colors from '../library/colors';

function CardSet(props) {
  
  const setIndex = props.setIndex;
  const { 
    cards, 
    changeCards,
    getDataForSetNavbar, 
    changeIndex,
    colorFilter,
  } = useContext(CardsContext);
  const currentSet = cards[setIndex].cards;  
  const {  
    changeShownCardColor, 
    changeColorState,
    closeShownCard,
  } = useContext(ShownCardsContext);

  const changeCardColor = (id, value) => {
    const newCardsSet = currentSet.map(card => id === card.id ? {...card, color: colors[value] } : card);
    changeShownCardColor(id, colors[value]);
    setTimeout(() => {
      closeShownCard();
    }, 500);
    changeCards(setIndex, newCardsSet);
  };
  
  useEffect(() => {
    changeIndex(setIndex);
    getDataForSetNavbar(setIndex);
    //eslint-disable-next-line
  }, []);

   useEffect(() => {
    setTimeout(() => getDataForSetNavbar(setIndex), 1000);
    changeColorState(colorFilter, currentSet);
    //eslint-disable-next-line
  }, [cards, currentSet]);

  useEffect(() => {
    changeColorState(colorFilter, currentSet);
    //eslint-disable-next-line
  }, [colorFilter]);  

  return (
    <div className='CardSet'>        
     <CardsField
        changeCardColor={changeCardColor}
        setIndex={setIndex}      
      />
      <CardForm />    
    </div>
  );
}

CardSet.defaultProps = {
  cards: [],
};

CardSet.propTypes = {
  setIndex: PropTypes.number.isRequired,  
  setOfCards: PropTypes.shape({
    setName: PropTypes.string,
    id: PropTypes.string,
    emoji: PropTypes.string,
    borderColor: PropTypes.string,  
    cards: PropTypes.array,
  }).isRequired,  
};

export default CardSet;