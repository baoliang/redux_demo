import React, { Component, PropTypes } from 'react'
import Products from '../components/Products'
import RegUser from '../components/RegUser'
import LoginUser from '../components/LoginUser'
import App from './App'
import { devTools } from 'redux-devtools'
import initStore from '../store/configureStore'
import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react'
import { Provider, connect } from 'react-redux'
import { Route, Link } from 'react-router'
import {
  ReduxRouter,
  routerStateReducer,
  reduxReactRouter,
  pushState
} from 'redux-router';

const store = initStore();

export default class Root extends Component {
  render() {
    console.log('Root rendering')

    return (
      <div>
        <Provider store={store}>
          <ReduxRouter>
            <Route path="/demo" component={App} >
              <Route  path="products" component={Products}/>
              <Route  path="reg" component={RegUser}/>
              <Route path="login" component={LoginUser}/>
            </Route>
          </ReduxRouter>
        </Provider>
        <DebugPanel top right bottom>
          <DevTools store={store} monitor={LogMonitor} />
        </DebugPanel>
      </div>

    )
  }
}