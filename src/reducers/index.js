import { combineReducers } from 'redux';
import reducerNotes from './reducer-notes';

const rootReducer = combineReducers({
    notes: reducerNotes    
});

export default rootReducer;