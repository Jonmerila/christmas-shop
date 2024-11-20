import express from "express";
import {
  getMovieById,
  getProducts,
} from "../controllers/product-controller.mjs";

const router = express.Router();

router.route("/").get(getProducts);

router.route("/:id").get(getMovieById);

export default router;
