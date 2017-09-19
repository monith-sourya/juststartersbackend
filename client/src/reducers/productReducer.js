import {FETCH_PRODUCT} from '../actions/types'

export default function(state = null , action){
     switch(action.type){
         case FETCH_PRODUCT:
             console.log("Payload", action.payload)
             return action.payload || false
         default: 
             return state;
     }
}