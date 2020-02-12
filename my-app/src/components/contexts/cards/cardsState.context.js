import React, { useReducer } from 'react';
import CardsContext from './cards.context';
import cardsReducer from './cardsReducer.context';
import startCards from '../../../startCards';

import {  
  SET_LOADING,
  CHANGE_CARDS,
  CHANGE_PROGRESS,
  CHANGE_INDEX,
  CHANGE_COLORFILTER,
  DELETE_SET,
  ADD_SET,
  SET_CURRENT_CARD, 
  OPEN_CLOSE_CARD_EDIT,
  OPEN_CLOSE_SET_ADDITION,
} from '../../../types';

const CardsState = props => {
  const colors = {
    green: '#A1E48C', 
    blue: '#8cb7e4', 
    red: '#e4ae8c',
  };

  const emptyCurrentCardData = {
    name: '',
    id: null,
    question: '',
    answer: '',
    difficulty: 1,
    subTheme: '',
    color: '#e4ae8c',
  };

  const initialState = {
    cards: startCards || [],   // from LS || []
    loading: false,
    currentIndex: 0,
    currentProgress: {
      progress: 0,
      numOfCards: 0,
      numOfCompleted: 0,
    },
    colorFilter: 'all',
    cardFormOpened: false,
    setFormOpened: false,
    currentCardData: emptyCurrentCardData,   
  }
  
  const [state, dispatch] = useReducer(cardsReducer, initialState);

  //To DO - loading image
  const setLoading = () => dispatch({ type: SET_LOADING });

  const changeIndex = (index) => {
    dispatch({ type: CHANGE_INDEX, data: index});    
  }

  const getDataForSetNavbar = (index = state.currentIndex) => {
    const currentSet = state.cards[index].cards;
    const numOfCards = state.cards[index].cards.length;
    const numOfCompleted = currentSet.filter(card => card.color === colors.green).length;    
    function countProgress() {
      if (numOfCards === numOfCompleted) {
            return 100;
      } else if(numOfCompleted === 0) {
            return 0;
      };      
      const diff = numOfCompleted * 100 / numOfCards;      
      return diff;        
    };
    const progress = countProgress();
    dispatch({ type: CHANGE_PROGRESS, data: {index, numOfCards, numOfCompleted, progress} });
  }

   // const getCards = () => {
  //   setLoading();
  //   //get from ls
  //   dispatch({ type: GET_CARDS, data: 'cardsFromLS' })
  // }

  //delete card
  //edit card

  const changeCards = (setIndex, newCards) => {     
    const targetSet = state.cards[setIndex];
    const newSet = {...targetSet, cards: [...newCards]};
    const newSets = state.cards.slice();
    newSets[setIndex] = newSet;
    dispatch({ type: CHANGE_CARDS, data: newSets, });
  }

  const setNewColorFilter = (value) => {
    dispatch({ type: CHANGE_COLORFILTER, data: value, });
  }

  const deleteSet = (id) => {
    const newCards = state.cards.filter(set => set.id !== id);
    dispatch({ type: DELETE_SET, data: newCards, });
  }

  const deleteCard = (id) => {
    const newCards = state.cards[state.currentIndex].cards.filter(card => card.id !== id );
    let newSets = state.cards;
    newSets[state.currentIndex].cards = newCards;   
    dispatch({ type: DELETE_SET, data: newSets, });
  }

  const setCurrentCardState = (cardToEdit = emptyCurrentCardData) => {
    dispatch({ type: SET_CURRENT_CARD, card: cardToEdit, });   
  }

  const openCardForm = () => {
    dispatch({ type: OPEN_CLOSE_CARD_EDIT, data: true,});     
  }
  const closeCardForm = () => {
    dispatch({ type: OPEN_CLOSE_CARD_EDIT, data: false,});     
  }

  const submitCardForm = (oldId, newCard, newId) => {
    let newCards;
    if(oldId) {
      newCards = state.cards[state.currentIndex].cards.map(card => card.id === oldId ? newCard : card);
    } else {  
      const cardToSave = {...newCard, id: newId, color: colors.red};      
      newCards = [...state.cards[state.currentIndex].cards, cardToSave]; 
    }
    changeCards(state.currentIndex, newCards);  
  }

  const openSetForm = () => {
    dispatch({ type: OPEN_CLOSE_SET_ADDITION, data: true,});     
  }
  const closeSetForm = () => {
    dispatch({ type: OPEN_CLOSE_SET_ADDITION, data: false,});     
  }

  const submitSetForm = (newSet) => {
    let newCards = [...state.cards];
    newCards.push(newSet);
    dispatch({ type: ADD_SET, data: newCards, });
  }
  
    
  return <CardsContext.Provider 
    value={{
      cards: state.cards,
      loading: state.loading,
      currentProgress: state.currentProgress,
      currentIndex: state.currentIndex,
      colorFilter: state.colorFilter,
      cardFormOpened: state.cardFormOpened,
      setFormOpened: state.setFormOpened,
      currentCardData: state.currentCardData,
      // getCards,
      changeCards,
      getDataForSetNavbar,
      changeIndex,
      setNewColorFilter,
      deleteSet,
      deleteCard,
      setCurrentCardState,
      openCardForm,
      closeCardForm,
      submitCardForm,
      openSetForm,
      closeSetForm,
      submitSetForm,
    }}
  >
    {props.children}
  </CardsContext.Provider>
}

export default CardsState;