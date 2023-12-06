import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { combineReducers } from 'redux';
import skillReducer from '../reducers/skillReducer';
import { timelineReducer } from '../actions/innerActions';

const rootReducer = combineReducers({
    timeline: timelineReducer,
    skills: skillReducer
  });
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;