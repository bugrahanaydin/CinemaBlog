import Movie from "../models/movie.js";

//status 200 means OK success
//as all know 404 is for not found
//201 means something is has been created
//409 is for when request is failed
// res is stands for response

export const getMovies = async (req, res) => {
  try {
    const movies = await Movie.find();
    res.status(200).json(movies);
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
};

export const getSingleMovie = async (req, res) => {
  try {
    const { id: _id } = req.params;
    const movie = await Movie.findById(_id);
    res.status(200).json(movie);
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
};

export const createMovie = async (req, res) => {
  const movie = req.body;
  const newMovie = new Movie(movie);
  try {
    await newMovie.save();
    res.status(201).json(newMovie);
  } catch (error) {
    res.status(409).json({
      message: error.message,
    });
  }
};

export const updateMovie = async (req, res) => {
  const { id: _id } = req.params;
  const movie = req.body;
  try {
    const updatedMovie = await Movie.findByIdAndUpdate(_id, movie, {
      new: true,
    });
    res.json(updatedMovie);
  } catch (error) {
    res.status(409).json({
      message: error.message,
    });
  }
};

export const deleteMovie = async (req, res) => {
  const { id: _id } = req.params;
  try {
    const deletedMovie = await Movie.findByIdAndRemove(_id);
    res.json(deletedMovie);
  } catch (error) {
    res.status(409).json({
      message: error.message,
    });
  }
};
