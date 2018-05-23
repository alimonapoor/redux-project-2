import React , { Component } from 'react'
import { connect } from 'react-redux'
import ProductsList from './../component/ProductsList'
import ProductItem from './../component/ProductItem'
import {addToCart} from './../actions'

class ProductContainer extends Component {
  render(){

    const { products ,  addToCart } = this.props
      return(
         
        <ProductsList title="Products">

          {
            Object.keys(products).map(ProductKey =>

              <ProductItem
              key = { ProductKey}
              product = { products[ProductKey]}
              onAddToCartClicked = {() => addToCart(ProductKey)}
              />)
            
          }
          
        </ProductsList>  
      )
  }
}

const mapStateToProps = state =>{
  return {
    products : state.products.byId
  }
}

export default connect(mapStateToProps, { addToCart })(ProductContainer)