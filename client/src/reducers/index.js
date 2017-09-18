import { combineReducers } from 'redux';
import fetchProducts from './productsReducer'
 
// New State:
export default combineReducers({
    products: fetchProducts
}) 