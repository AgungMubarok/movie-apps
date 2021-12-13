import axios from 'axios';
// http://www.omdbapi.com/?i=tt3896198&apikey=7d7ab7cc
// http://www.omdbapi.com/?apikey=faf7e5bb&s=spiderman
export const getMovie = query => {
  return async dispatch => {
    dispatch({
      type: 'GET_MOVIE_REQUEST',
    });

    try {
      const { data } = await axios.get(
        `http://www.omdbapi.com/?apikey=faf7e5bb&s=${query}`
      );
      dispatch({
        type: 'GET_MOVIE_SUCCESS',
        payload: data.Search,
      });
    } catch (err) {
      dispatch({
        type: 'GET_MOVIE_FAIL',
        payload: err,
      });
    }
  };
};

export const getDetailMovie = imdbID => {
  return async dispatch => {
    dispatch({
      type: 'GET_MOVIE_DETAIL_REQUEST',
    });
    try {
      const { data } = await axios.get(
        `http://www.omdbapi.com/?apikey=faf7e5bb&i=${imdbID}`
      );
      console.log(data);
      dispatch({
        type: 'GET_MOVIE_DETAIL_SUCCESS',
        payload: data,
      });
    } catch (err) {
      dispatch({
        type: 'GET_MOVIE_DETAIL_FAIL',
        payload: err,
      });
    }
  };
};

export function addToFavourite(movie, id) {
  return {
    type: 'ADD_TO_FAVOURITE',
    payload: movie,
    payload2: id,
  };
}

export function removeFavourite(movie) {
  return {
    type: 'REMOVE_FAVOURITE',
    payload: movie,
    payload2: movie,
  };
}
