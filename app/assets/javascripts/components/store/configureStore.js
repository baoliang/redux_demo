import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import rootReducer from '../reducers'
import { createStore, compose, combineReducers, applyMiddleware } from 'redux';
import { createHistory } from 'history'
import { reduxReactRouter } from 'redux-router';
import { devTools } from 'redux-devtools'



export default function initStore() {

  const store = compose(
    reduxReactRouter({ createHistory }),
    devTools()
  )(createStore)(rootReducer);
  console.log(store)

  return store
}
