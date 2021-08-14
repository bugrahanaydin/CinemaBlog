import axios from "axios";
const apiEndpoint = "/movies/";
// /movies/

export const fetchMovies = async () => await axios.get(apiEndpoint);

export const fetchSingleMovie = async (id) =>
  await axios.get(`${apiEndpoint}${id}`);

export const createMovie = async (movie) =>
  await axios.post(apiEndpoint, movie);

export const updateMovie = async (id, updatedMovie) =>
  await axios.patch(`${apiEndpoint}${id}`, updatedMovie);

export const deleteMovie = async (id) =>
  await axios.delete(`${apiEndpoint}${id}`);
