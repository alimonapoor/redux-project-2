import React , { Component } from 'react'
import ProductContainer from './ProductContainer'
import CartCountainer from './CartCountainer';
// import { connect } from 'react-redux'
// import { getAllProducts } from './../actions'



export default class App extends Component {

  // componentDidMount() {
  //   this.props.getAllProducts()
  // }

  render(){
      return(
        <div>
          <h1>Roocket App</h1>
          <hr/>

          <ProductContainer />

          <hr />

          <CartCountainer />
        </div>  
      )
  }
}


// export default connect(null, { getAllProducts })(App)