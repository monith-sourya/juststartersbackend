import {ADD_TO_CART, REMOVE_FROM_CART} from '../actions/types'

export default function(state = [], action){
     switch(action.type){
         case ADD_TO_CART:
             console.log("ADD TO CART:", action.payload)
             return [...state, action.payload]
        case REMOVE_FROM_CART:
             console.log("REMOVE FROM CART:", action.payload)
             return [...state.slice(0, action.payload), ...state.slice(action.payload + 1)]
         default: 
             return state;
     }
}