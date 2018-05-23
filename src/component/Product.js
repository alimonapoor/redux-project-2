import React , { Component } from 'react'


export default class ProductsList extends Component {
  render(){

    const { title , price ,quantity } = this.props
      return(
         
        <div>

            { title } - ${price}{ quantity ? `x ${quantity}` : null}  
          
        </div>  
      )
  }
}