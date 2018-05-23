import React from 'react'
import ReactDOM from 'react-dom'
import thunk from 'redux-thunk'
import App from './container/App'
import { Provider } from 'react-redux'
import { createLogger} from 'redux-logger'
import reducer from './reducers'
import { createStore , applyMiddleware } from 'redux'
import { getAllProducts } from './actions';

const middleware = [thunk]
middleware.push(createLogger())



const store = createStore(
     reducer,
    applyMiddleware(...middleware))

    store.dispatch(getAllProducts())    

ReactDOM.render(  
     
         <Provider store={ store } >
           <App />
       </Provider>,    
                   document.getElementById('root'))

