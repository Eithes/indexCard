import React, { useContext } from 'react';
import './GoBackCard.scss';
import ShownCardsContext from '../contexts/shownCards/shownCards.context';

function GoBackCard(props) {

  const {setSubTheme, changeColorState,} = useContext(ShownCardsContext);
 
  const goBack = () => {
    setSubTheme('');
    changeColorState('all');
  }

  return (    
    <div onClick={goBack}>Go Back!</div>
  );
}

export default GoBackCard;