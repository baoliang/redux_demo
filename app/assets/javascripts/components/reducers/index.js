import { combineReducers } from 'redux'
import * as types from '../constants/ActionTypes'

import { routerStateReducer as router } from 'redux-router'
function gets(state = {
  isFetching: false,
  didInvalidate: false,
  items: []
}, action) {
  switch (action.type) {

    case types.REQUEST_GETS:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false
      })
    case types.RECEIVE_GETS:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        products: action.gets,
        lastUpdated: action.receivedAt
      })
    default:
      return state
  }
}

function getsByUrl(state = { }, action=types.REQUEST_GETS, url='/api/products') {
  switch (action.type) {
    case types.RECEIVE_GETS:
    case types.REQUEST_GETS:
      return Object.assign({}, state, {
        products: gets(url, action)
      })
    default:
      return state
  }
}



const rootReducer = combineReducers({
  getsByUrl,router

})

export default rootReducer
