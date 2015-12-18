import * as types from '../constants/ActionTypes'
import {API_PRODUCTS } from '../constants/API'
import fetch from 'isomorphic-fetch'


export function RegUser({ email, password }) {
  return {
    type: types.REG_USER,
    email,
    password
  }
}

export function userLogin(email, password) {
  return {
    type: types.LOGIN_USER,
    eamil,
    password
  }
}

export function getProducts(email, password) {
  return {
    type: types.GET_PRODUCTS
  }
}




function requestGets() {
  return {
    type: types.REQUEST_POSTS
  }
}

function receiveGets(url, json) {
  return {
    type: types.RECEIVE_POSTS,
    url: url,
    products: json.data.children.map(child => child.data),
    receivedAt: Date.now()
  }
}

function fetchGet(url) {
  return dispatch => {
    dispatch(requestGets(reddit))
    return fetch(url)
      .then(response => response.json())
      .then(json => dispatch(receivePosts(reddit, json)))
  }
}

function shouldFetchGets(state, url) {
  const gets = state.getsByReddit[url]
  if (!gets) {
    return true
  }
  if (gets.isFetching)      return false
}



export function fetchGetsIfNeeded(url) {

  return (dispatch, getState) => {
    if (shouldFetchGets(getState(), url)) {
      return dispatch(fetchGet(url))
    }
  }
}
