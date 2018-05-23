import React , { Component } from 'react'
// \import { connect } from 'react-redux'

export default class ProductsList extends Component {
  render(){

    const { title , children } = this.props
      return(
         
        <div>
            <h3>{ title} </h3>

            <div>
              { children }
            </div>  
          
        </div>  
      )
  }
}