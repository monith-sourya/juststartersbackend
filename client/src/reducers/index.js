import { combineReducers } from 'redux';
import fetchProducts from './productsReducer'
import fetchProduct from './productReducer'
 
// New State:
export default combineReducers({
    products: fetchProducts,
    product: fetchProduct
}) 