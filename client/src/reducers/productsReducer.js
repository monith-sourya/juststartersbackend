import {FETCH_PRODUCTS} from '../actions/types'

export default function(state = null , action){
     switch(action.type){
         case FETCH_PRODUCTS:
             console.log("Payload", action.payload)
             return action.payload || false
         default: 
             return state;
     }
}