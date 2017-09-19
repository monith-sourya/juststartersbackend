import { combineReducers } from 'redux';
import fetchProducts from './productsReducer'
import fetchProduct from './productReducer'
import addToCart from './cartReducer'
 
// New State:
export default combineReducers({
    products: fetchProducts,
    product: fetchProduct,
    cart: addToCart
}) 