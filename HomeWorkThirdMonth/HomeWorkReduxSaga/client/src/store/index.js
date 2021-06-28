import { combineReducers } from 'redux';
import { reducer as moviesReducer } from './movies/reducer';

const rootReducer = combineReducers({
    movies: moviesReducer,
});

export default rootReducer;
