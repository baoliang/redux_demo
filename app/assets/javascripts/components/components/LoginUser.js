import React, { Component, PropTypes } from 'react'
import { injectProps } from 'react-props'


export default class LoginUser extends Component {


  render() {
    console.log('RegUser rendering')

    return (
      <div>
        Email<input type='paswword' id='password' />
        <br/>
        Password<input type='text' id='email' />
        <br/>
        <input type='button' value='Login' />
        </div>
    )
  }
}