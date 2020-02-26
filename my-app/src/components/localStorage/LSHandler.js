import startCards from '../../startCards';

const cardsStorageHandler = {  
  setCardToLS: (cards) => { 
    return window.localStorage.setItem('cards', JSON.stringify(cards));
  },
  getCardsFromLS: function() {
    return JSON.parse(window.localStorage.getItem('cards')) || startCards;    
  },
};

export default cardsStorageHandler
