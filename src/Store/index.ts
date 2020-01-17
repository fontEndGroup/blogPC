import { createStore, combineReducers } from 'redux';
import { homeReducer } from './reducer'

const redusers = combineReducers({
    [homeReducer.moudleName]: homeReducer.reducer,
});

export default createStore(redusers, {})
