import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../reducers/rootReducer'
// import { homeMiddleware } from '../pages/Home'

export default (store = createStore(rootReducer))
