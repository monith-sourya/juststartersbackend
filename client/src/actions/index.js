import axios from 'axios'
import {FETCH_PRODUCTS} from './types' 

export  const fetchProducts = () => {
    return function(dispatch) {
        const req = axios.get('/db/products')
            .then((res) => dispatch({
                    type: FETCH_PRODUCTS, 
                    payload: res.data
            }))

//        return {
//            type: FETCH_PRODUCTS,
//            payload: req.data
//        }
    } 
}