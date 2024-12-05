import express from "express";
import cors from "cors";
import {
  getProductById,
  getProducts,
} from "./controllers/product-controller.mjs";
import dotenv from "dotenv";
import { addToCart, getCart } from "./controllers/cart-controller.mjs";

// import { hot, comp } from "./dev.js";

// import { fileURLToPath } from "url";
// import path from "path";

dotenv.config();
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);
const port = 3010;
// const dev = process.env.NODE_ENV !== "production";

const app = express();
app.use(cors());

// app.use(comp);
// app.use(hot);

app.get("/api/decorations", getProducts);
app.get("/api/decorations/:id", getProductById);

app.get("/api/basket", getCart);
app.post("/api/basket", addToCart);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
