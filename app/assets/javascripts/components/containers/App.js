

import React, { Component, PropTypes } from 'react'
import Products from '../components/Products'
import RegUser from '../components/RegUser'
import LoginUser from '../components/LoginUser'
import { createHistory } from 'history'

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


@connect((state) => ({}))
export default  class App extends Component {
  static propTypes = {
    children: PropTypes.node
  }

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
    const { dispatch } = this.props;

    dispatch(pushState(null, '/parent/child/custom'));
  }


  render() {
    const links = [
      '/demo',
      '/demo/products',
      '/demo/login',
      '/demo/reg'
    ].map(l =>
        <p key={l}>
          <Link to={l}>{l}</Link>
        </p>
    );

    return (
      <div >
        <h1>Spree store</h1>
        {links}
        {this.props.children}

      </div>
    );
  }
}



