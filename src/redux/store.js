import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { combineReducers } from 'redux';
import movieReducers from './reducers/reducers';

const reducers = combineReducers({
  movieList: movieReducers,
  // addToFavourite: ,
  // searchMovie: ,
});

export const store = createStore(reducers, {}, applyMiddleware(thunk));
