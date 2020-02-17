import React, { useContext } from 'react';
import './GoBackButton.scss';
import ShownCardsContext from '../contexts/shownCards/shownCards.context';

function GoBackButton(props) {

  const { setSubTheme } = useContext(ShownCardsContext);
 
  const goBack = () => {
    setSubTheme('');
  }

  return (    
    <div onClick={goBack} className='GoBackBtn'>
      Go Back!
    </div>
  );
}

export default GoBackButton;