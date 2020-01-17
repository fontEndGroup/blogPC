import { createStore, combineReducers } from 'redux';
import { homeReducer, user } from './reducer'

const redusers = combineReducers({
    [homeReducer.moudleName]: homeReducer.reducer,
    [user.moudleName]: user.reducer,
});

export default createStore(redusers, {})
