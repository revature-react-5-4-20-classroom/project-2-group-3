
import { compose, applyMiddleware, Store, createStore, combineReducers } from 'redux';
import thunk from 'redux-thunk';


const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose



const enhancer = composeEnhancers(
    applyMiddleware(thunk)
  )
  
  