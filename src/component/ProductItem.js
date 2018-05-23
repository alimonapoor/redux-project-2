import React , { Component } from 'react'
import Product from './Product'

export default class ProductItem extends Component {
  render(){

    const { product , onAddToCartClicked } = this.props
      return(
         
        <div style = {{ marginBottom : 20 }}>
            <Product

                  title = {product.title}
                  price = {product.price }
            />
            <button
             onClick={onAddToCartClicked}
             disabled={product.inventory > 0 ? '' : 'disabled'}
             >
             { product.inventory > 0 ? 'Add To Cart' : 'Sold Out'}
             </button>
          
        </div>  
      )
  }
}