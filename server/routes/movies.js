import express from "express";
import {
  getMovies,
  createMovie,
  updateMovie,
  deleteMovie,
  getSingleMovie,
} from "../controllers/movies.js";
const router = express.Router();

router.get("/", getMovies);
router.get("/:id", getSingleMovie);
router.post("/", createMovie);
router.patch("/:id", updateMovie);
router.delete("/:id", deleteMovie);

export default router;
