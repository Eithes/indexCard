import {  
  SET_LOADING,
  CHANGE_CARDS,
  CHANGE_INDEX,
  CHANGE_PROGRESS,
  CHANGE_COLORFILTER,
  DELETE_SET,
  ADD_SET,
  SET_CURRENT_CARD,
  OPEN_CLOSE_CARD_EDIT,
  OPEN_CLOSE_SET_ADDITION,
} from '../../../types';

export default (state, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      }
    case CHANGE_CARDS:
      return {
        ...state,
        cards: action.data,
        loading: false,
      }
    case CHANGE_INDEX:
      return {
        ...state,
        currentIndex: action.data,
      }
    case CHANGE_PROGRESS: 
      return {
        ...state,
        currentProgress: { 
          ...state,
          currentIndex: action.data.index,
          numOfCards: action.data.numOfCards,
          numOfCompleted: action.data.numOfCompleted,
          progress: action.data.progress,
        } 
      }
    case CHANGE_COLORFILTER:
      return {
        ...state,
        colorFilter: action.data,
      }
    case DELETE_SET:
      return {
        ...state,
        cards: action.data,
      }
    case ADD_SET:
      return {
        ...state,
        cards: action.data,
      }
    case SET_CURRENT_CARD: 
      return {
        ...state,
        currentCardData: {
          name: action.card.name,
          id: action.card.id,
          question: action.card.question,
          answer: action.card.answer,
          difficulty: action.card.difficulty,
          subTheme: action.card.subTheme,
          color: action.card.color,
        },
      }  
    case OPEN_CLOSE_CARD_EDIT: 
      return {
        ...state,
        cardFormOpened: action.data,
      }
    case OPEN_CLOSE_SET_ADDITION:
      return {
        ...state,
        setFormOpened: action.data,
      }  
    default:
    return state;
  }  
}