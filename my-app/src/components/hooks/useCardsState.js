import React, {useState} from 'react';

export default (initialCards) => {
    const [green, blue, red,] = ['#A1E48C', '#8cb7e4', '#e4ae8c',];
    
    const sortCardsByColor = (cards) => {
      const greenPack = cards.filter(card => card.color === green);
      const bluePack = cards.filter(card => card.color === blue);
      const redPack = cards.filter(card => card.color === red);
      const newCards = [...greenPack, ...bluePack, ...redPack];
      return newCards;
    };

    const [cards, setCards] = useState(sortCardsByColor(initialCards));  
      
    const filterCardsByColor = (color, newCards = initialCards) => {
      let sortedCards;
      switch (color) {      
        case 'green':
        case '0':
          sortedCards = newCards.filter(card => card.color === green);
          break;
        case 'blue':
        case '1':
          sortedCards = newCards.filter(card => card.color === blue);
          break;
        case 'red':
        case '2':        
          sortedCards = newCards.filter(card => card.color === red);
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
      
      const toggleCard = (id, oldCards = cards, pickedColor) => {    
        const newCards = oldCards.map(card => id === card.id ? {...card, opened: !card.opened } : card);
        const newFilteredCards = filterByPickedColor(pickedColor, newCards);      
        setCards(newFilteredCards);
      };

    return {
      cards,
      toggleCard: toggleCard,

      changeShownCardColor: (id, value, pickedColor) => {
        let newCards = cards.map(card => id === card.id ? {...card, color: value } : card);
        if (pickedColor === 'all' ) { 
          newCards = filterByPickedColor(pickedColor, newCards);
          setCards(newCards);
        }
        setCards(newCards);
        setTimeout(() => toggleCard(id, newCards, pickedColor), 500);
      },

      changeColorState: (value, initCards) => {
        const filteredCards = filterByPickedColor(value, initCards);
        setCards(filteredCards);
      },
    }
}
