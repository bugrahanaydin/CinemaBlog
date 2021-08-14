import * as api from "../api/index";
import * as types from "./types";

export const fetchMovies = () => async (dispatch) => {
  try {
    const { data } = await api.fetchMovies();
    dispatch({
      type: types.FETCH_MOVIES,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const fetchSingleMovie = (id) => async (dispatch) => {
  try {
    const { data } = await api.fetchSingleMovie(id);
    dispatch({
      type: types.FETCH_SINGLE_MOVIE,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const createMovie = (movie) => async (dispatch) => {
  try {
    const { data } = await api.createMovie(movie);
    dispatch({
      type: types.CREATE_MOVIE,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const updateMovie = (id, movie) => async (dispatch) => {
  try {
    const { data } = await api.updateMovie(id, movie);

    dispatch({ type: types.UPDATE_MOVIE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteMovie = (id) => async (dispatch) => {
  try {
    const { data } = await api.deleteMovie(id);
    dispatch({
      type: types.DELETE_MOVIE,
      payload: data._id,
    });
  } catch (error) {
    console.log(error);
  }
};
