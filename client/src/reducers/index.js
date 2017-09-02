import { combineReducers } from 'redux';
import selectedCardReducer from './reducer_card'
import { reducer as formReducer } from 'redux-form'
 

// New State:
const rootReducer = combineReducers({
     activeCard: selectedCardReducer,
     form: formReducer
});
const store = createStore(rootReducer)

export default rootReducer;
