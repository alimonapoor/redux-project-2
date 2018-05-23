import React , { Component} from 'react'
import Cart from './../component/Cart'
import { connect } from 'react-redux'
import { getCartProducts, getTotal } from './../reducers'
import { checkout } from './../actions'

class CartCountainer extends Component {
  
  render() {
    const { products , total , checkout } = this.props
    return (
      <Cart 
          products ={products}
          total = {total}
          onCheckOutClick = {()=> checkout(products)}
      />
    )
  }
}

const mapStateToProps = ( state) => ({
  products : getCartProducts(state),
  total : getTotal(state)
})

export default connect(mapStateToProps , {checkout})(CartCountainer)