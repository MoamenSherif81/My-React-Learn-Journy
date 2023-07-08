const redux = require('redux');

function counterReducer(state = {counter: 0}, action) {
  if(action.type == 'increment') {
    return {
      counter: state.counter + 1
    };
  } else if(action.type == 'decrement') {
    return {
      counter: Math.max(0, state.counter - 1)
    };
  }
}

const store = redux.createStore(counterReducer);

function counterSubscriber(){
  const latestState = store.getState();
  console.log(latestState);
}

store.subscribe(counterSubscriber);

store.dispatch({type: 'increment'});