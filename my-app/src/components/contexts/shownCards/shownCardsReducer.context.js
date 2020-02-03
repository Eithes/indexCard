import {  
  
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
    default:
    return state;
  }  
}