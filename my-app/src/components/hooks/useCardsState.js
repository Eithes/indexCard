import React, {useState} from 'react';

export default (initial) => {

  const colors = {
    green: '#A1E48C',
    blue: '#8cb7e4',
    red: '#e4ae8c',
  } 

   const [initialCards, setInitialCards] = useState(initial);

    const sortCardsByColor = (cards) => {
      const greenPack = cards.filter(card => card.color === colors.green);
      const bluePack = cards.filter(card => card.color === colors.blue);
      const redPack = cards.filter(card => card.color === colors.red);
      const newCards = [...greenPack, ...bluePack, ...redPack];
      return newCards;    
    };

    const findCurrentSet = (index) => {
        return initialCards[index];
    }

    const [cards, setCards] = useState([]);  
    // const [cards, setCards] = useState(sortCardsByColor(initialCards));  
  
    const filterCardsByColor = (setIndex, color, newCards = initialCards[setIndex]) => {
      console.log(newCards)
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

    const filterByPickedColor = (setIndex, color, newCards = initialCards[setIndex]) => { 
        if (color !== 'all' ) {
          newCards = filterCardsByColor(color, newCards); 
          console.log(newCards)
        }
           newCards = sortCardsByColor(newCards); 
        return newCards;
      };
      
      const toggleCard = (setIndex, id, oldCards = cards, pickedColor) => {    
        const newCards = oldCards.map(card => id === card.id ? {...card, opened: !card.opened } : card);
        const newFilteredCards = filterByPickedColor(pickedColor, newCards);      
        setCards(newFilteredCards);
      };

      const changeCardColor = (setIndex, id, value, pickedColor, cards) => {
        // changing initial cards here too!!!   
        const newInitialCards = initialCards[setIndex].cards.map(card => id === card.id ? {...card, color: colors[value] } : card);
        setInitialCards([...initialCards.splice(setIndex, 1, newInitialCards)]);      

        let newCards = cards.map(card => id === card.id ? {...card, color: value } : card);
        if (pickedColor === 'all' ) { 
          filterByPickedColor(setIndex, pickedColor, newCards);
          setCards(newCards);
        }   
        setCards(newCards);
      };

    return {
      initialCards,
      toggleCard,
      findCurrentSet,
      sortCardsByColor,
      changeCardColor,
      filterByPickedColor,

      changeColorState: (setIndex, value, initCards) => {
        const filteredCards = filterByPickedColor(setIndex, value, initCards);
        return filteredCards;
      },
    }
}
