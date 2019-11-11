import { combineReducers } from 'redux';
import postsReducer from './posts';

const allReducers = combineReducers({
  postsReducer
});

export default allReducers;
