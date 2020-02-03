import {useState} from 'react';

export default (startCards) => {
    
    const [cards, setCards] = useState(startCards);

    const changeCards = (setNumber, newCards) => {
      const targetSet = cards[setNumber];     
      const newSet = {...targetSet, cards: [...newCards]};     
      const newInitial = cards.slice();
      newInitial[setNumber] = newSet;    
      setCards(newInitial);
    }

    return {
      cards,
      changeCards,
    }
}
