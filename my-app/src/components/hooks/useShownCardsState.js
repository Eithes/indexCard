import {useState} from 'react';

export default (initialCards) => {
    const colors = {
      green: '#A1E48C', 
      blue: '#8cb7e4', 
      red: '#e4ae8c',
    }   
    
    const sortCardsByColor = (cards) => {
      const greenPack = cards.filter(card => card.color === colors.green);
      const bluePack = cards.filter(card => card.color === colors.blue);
      const redPack = cards.filter(card => card.color === colors.red);
      const newCards = [...greenPack, ...bluePack, ...redPack];
      return newCards;
    };

    const [shownCards, setCards] = useState(sortCardsByColor(initialCards));  
      
    const filterCardsByColor = (color, newCards = initialCards) => {
      let sortedCards;
      switch (color) {      
        case 'green':
        case '0':
          sortedCards = newCards.filter(card => card.color === colors.green);
          break;
        case 'blue':
        case '1':
          sortedCards = newCards.filter(card => card.color === colors.blue);
          break;
        case 'red':
        case '2':        
          sortedCards = newCards.filter(card => card.color === colors.red);
          break; 
        default: sortedCards = newCards;
      }   
      return sortedCards;
    };

    const filterByPickedColor = (color, newCards = initialCards) => { 
        if (color !== 'all' ) {
          newCards = filterCardsByColor(color, newCards); 
        }
           newCards = sortCardsByColor(newCards); 
        return newCards;
      };
      
      const toggleShownCard = (id, oldCards = shownCards, pickedColor) => {      
        const newCards = oldCards.map(card => id === card.id ? {...card, opened: !card.opened } : card);
        const newFilteredCards = filterByPickedColor(pickedColor, newCards);
        setCards(newFilteredCards);
      }; /// НАХУЯ????

      const closeShownCard = (id, oldCards = shownCards, pickedColor) => {
        const newCards = oldCards.map(card => id === card.id ? {...card, opened: false } : card);
        const newFilteredCards = filterByPickedColor(pickedColor, newCards);
        setCards(newCards);
      }

    return {
      shownCards,
      toggleShownCard,
      closeShownCard,

      changeShownCardColor: (id, value, pickedColor) => {
        let newCards = shownCards.map(card => id === card.id ? {...card, color: value } : card);
        if (pickedColor === 'all' ) { 
          newCards = filterByPickedColor(pickedColor, newCards);
          setCards(newCards);
        }
        setCards(newCards);
        setTimeout(() => toggleShownCard(id, newCards, pickedColor), 500);
      },

      changeColorState: (value, initCards) => {
        const filteredCards = filterByPickedColor(value, initCards);
        setCards(filteredCards);
      },
    }
}
