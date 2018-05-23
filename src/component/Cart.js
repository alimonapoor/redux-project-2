import React , { Component } from 'react'
import Product from './Product'

export default class Cart extends Component {
  render(){

    const { products , total  } = this.props
    const hasProducts = products.length > 0
    const nodes = hasProducts ? (
      products.map(product =>
        <Product 
            title = {product.title}
            price = {product.price}
            quantity={product.quantity}
            key={product.id}
        />
      
      )
    ) : (
      <em>please add some products tp cart.</em>
    )
    
      return(
         
        <div>

            <h3>Your Cart</h3>
            <div> { nodes} </div>
            <p>Total : ${total}</p>
            <button disabled={hasProducts ? '' : 'disabled'}>
            checkout
            </button>    
        </div>  
      )
  }
}