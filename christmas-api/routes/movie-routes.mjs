import express from "express";
import { getMovies, getMovieById } from "../controllers/movie-controller.mjs";

const router = express.Router();

router.route("/").get(getMovies);

router.route("/:id").get(getMovieById);

export default router;
