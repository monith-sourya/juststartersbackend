import axios from 'axios'
import {FETCH_PRODUCTS, FETCH_PRODUCT} from './types' 

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