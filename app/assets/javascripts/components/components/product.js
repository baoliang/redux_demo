import React, { Component, findDOMNode, PropTypes } from 'react'

import { injectProps } from 'react-props'
import pureRender from '../pureRenderMixin'


@pureRender
export default class Prodcut extends Component {

  constructor(props, context) {
    super(props, context)

  }


  render() {


    return (
      <li key={ this.props.id } className='completed' >
        <div className="view">

          <label >{ this.props.name  }</label>

        </div>

      </li>
    )
  }
}
