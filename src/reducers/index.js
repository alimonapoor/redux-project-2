import { combineReducers } from 'redux'
import products from './products'
import cart from './cart'


export default combineReducers({
  products,
  cart
})

export const getCartProducts = state => 
  state.cart.addedIds.map(id => ({
    ...state.products.byId[id] ,
    quantity : state.cart.quantityById[id] || 0
  }))

export const getTotal = state => 
  state.cart.addedIds.reduce((total, id ) => total + state.products.byId[id].price * state.cart.quantityById[id] || 0 , 0).toFixed(2)  