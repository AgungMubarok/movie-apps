const initialState = {
  loading: false,
  loadingDetail: false,
  content: [],
  error: null,
  detailMovie: {},
  favouriteMovie: [],
  isFavourite: false,
};

const movieReducers = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_MOVIE_REQUEST':
      return {
        ...state,
        loading: true,
      };
    case 'GET_MOVIE_SUCCESS':
      return {
        ...state,
        loading: false,
        content: action.payload,
      };
    case 'GET_MOVIE_FAIL':
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case 'GET_MOVIE_DETAIL_REQUEST':
      return {
        ...state,
        loadingDetail: true,
      };
    case 'GET_MOVIE_DETAIL_SUCCESS':
      return {
        ...state,
        loadingDetail: false,
        detailMovie: action.payload,
      };
    case 'GET_MOVIE_DETAIL_FAIL':
      return {
        ...state,
        loadingDetail: false,
        error: action.payload,
      };
    case 'ADD_TO_FAVOURITE':
      return {
        ...state,
        favouriteMovie: [...state.favouriteMovie, action.payload],
        isFavourite: true,
      };
    case 'REMOVE_FAVOURITE':
      return {
        ...state,
        favouriteMovie: state.favouriteMovie.filter(
          item => item.imdbID !== action.payload
        ),
        isFavourite: false,
      };
    case 'ADD_SEARCH_KEYWORD':
      let recentSearch = [...state.content, action.payload];
      return recentSearch;
    default:
      return state;
  }
};

export default movieReducers;
