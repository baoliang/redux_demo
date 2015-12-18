import React, { Component, PropTypes } from 'react'
import Product from './Product'
import { connect } from 'react-redux'
import {  fetchGetsIfNeeded } from '../actions'
import { injectProps } from 'react-props'
import API_PRODUCTS from '../constants/API'


class Products extends React.Component {
  constructor(props) {
    super(props);

  }


  render() {
    console.log('Products rendering')
    console.log(this.props)

    return <ul id="Product-list">{
      this.props.products.map(product =>
          <Product key={ product.id } name={ product.name }/>
      )
    }</ul>
  }
}

Products.propTypes = {

  products: PropTypes.array.isRequired

}

function mapStateToProps(state) {
  const { getsByUrl } = state
  console.log(state)
  const {

    items: products
    } = getsByUrl() || {

    items: []
  }

  return {
    products
  }
}

export default connect(mapStateToProps)(Products)