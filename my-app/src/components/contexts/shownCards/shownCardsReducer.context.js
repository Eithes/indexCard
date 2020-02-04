import {  
  FILTER_CARDS,
  OPEN_CARD,
  CLOSE_CARD,
  SET_COLOR,
} from '../../../types';

export default (state, action) => {
  switch (action.type) {
    case FILTER_CARDS:
      return {
        ...state,
        cards: action.data,        
      }
    case OPEN_CARD:
      return {
        ...state,
        opened: true,
        currentCardId: action.data,
      }
    case CLOSE_CARD:
      return {
        ...state,
        opened: false,
        currentCardId: null,
      }
    case SET_COLOR:
      return {
        ...state,
        cards: action.data,
        colorState: action.color,
      }  
    default:
    return state;
  }  
}