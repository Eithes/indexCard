import React, {useState} from 'react';

export default (startCards) => {
    
    const [initialCards, setInitialCards] = useState(startCards);

    const changeInitialCards = (setNumber, newCards) => {
      const targetSet = initialCards[setNumber];     
      const newSet = {...targetSet, cards: [...newCards]};     
      const newInitial = initialCards.slice();
      newInitial[setNumber] = newSet;    
      setInitialCards(newInitial);
    }

    return {
      initialCards,
      changeInitialCards,
    }
}
