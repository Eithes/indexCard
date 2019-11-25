let state = 0;

function updateState(state, action) {
  if(action.type === 'INCREMENT') {
    return Object.assign({}, state, {count: state.count + action.amount});
    //example   
  } else if (action.type === 'DECREMENT') {
    return {count: state.count - action.amount};
  } else {
      return state;
  }
}

class Store {
  constructor(updateState, state) {
    this._state = state;
    this._updateState = updateState;
    this._callbacks = [];
  }

  get state() {
    return this._state;
  }

  setState(action) {
    this._state = this._updateState(this._state, action);
    this._callbacks.forEach(cb => cb());
    
  }

  subscribe(callback) {
    this._callbacks.push(callback);
    return () => {
      this._callbacks = this._callbacks.filter(cb => cb !== callback);
    }
  }

  unSubscribe(callback) {
    this._callbacks.filter(cb => cb !== callback);
  }

}

const initialState = { count: 0 }

const store = new Store(updateState, initialState);

const incrementAction = {type: 'INCREMENT', amount: 5};
const decrementAction = {type: 'DECREMENT', amount: 3};

const unSub = store.subscribe(() => {
  console.log('State changed', store.state);
});
store.setState(incrementAction);
store.setState(incrementAction);
store.setState(decrementAction);
unSub();
store.setState(decrementAction);

// state = updateState(state, incrementAction);
// console.log(state);
// state = updateState(state, decrementAction);
// console.log(state);

// console.log(store.state);
// store.setState(incrementAction);
// console.log(store.state);

 