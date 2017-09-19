import axios from 'axios'
import {FETCH_PRODUCTS, FETCH_PRODUCT, ADD_TO_CART} from './types' 

// We use middlewares for the dispatch stuff w/ async network requests

export function fetchProducts(){
    return function(dispatch) {
        const req = axios.get('/db/products')
            .then((res) => dispatch({
                    type: FETCH_PRODUCTS, 
                    payload: res.data
            }))
    } 
}

export function fetchProduct(id){
    return function(dispatch) {
        const req = axios.get(`/db/products/${id}`)
            .then((res) => dispatch({
                    type: FETCH_PRODUCT, 
                    payload: res.data
            }))
    } 
}

// Here we're just locally adding stuff to our app state, so it's a simple function

export function addToCart(product){
    return {
        type: ADD_TO_CART,
        payload: product
    }
}