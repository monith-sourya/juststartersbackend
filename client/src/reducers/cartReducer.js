import {ADD_TO_CART} from '../actions/types'

export default function(state = [], action){
     switch(action.type){
         case ADD_TO_CART:
             console.log("ADD TO CART:", action.payload)
             return [...state, action.payload]
         default: 
             return state;
     }
}