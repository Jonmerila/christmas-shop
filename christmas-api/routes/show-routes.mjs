import express from "express";
import { getShows, getShowById } from "../controllers/show-controller.mjs";

const router = express.Router();

router.route("/").get(getShows);

router.route("/:id").get(getShowById);

export default router;
