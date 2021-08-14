import * as types from "../actions/types";

const initialState = {
  movies: [],
  currentMovie: null,
};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_MOVIES:
      return {
        ...state,
        movies: action.payload,
      };
    case types.FETCH_SINGLE_MOVIE:
      return {
        ...state,
        currentMovie: action.payload,
      };
    case types.CREATE_MOVIE:
      return {
        ...state,
        movies: [...state.movies, action.payload],
      };
    case types.UPDATE_MOVIE:
      return {
        ...state,
        movies: state.movies.map((movie) => {
          if (movie._id === action.payload._id) {
            return action.payload;
          } else {
            return movie;
          }
        }),
        currentMovie: action.payload,
      };
    case types.DELETE_MOVIE:
      return {
        ...state,
        movies: state.movies.filter((movie) => movie._id !== action.payload),
        currentMovie: null,
      };
    default:
      return {
        ...state,
      };
  }
};

export default movieReducer;
