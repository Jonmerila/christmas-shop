import express from "express";
import cors from "cors";
import {
  getProductById,
  getProducts,
} from "./controllers/product-controller.mjs";
import dotenv from "dotenv";
import {
  addToCart,
  deleteFromCart,
  getCart,
} from "./controllers/cart-controller.mjs";

dotenv.config();
const port = 3010;

const app = express();
app.use(cors());

app.use(express.json());

app.get("/api/decorations", getProducts);
app.get("/api/decorations/:id", getProductById);

app.get("/api/basket", getCart);
app.post("/api/basket", addToCart);
app.delete("/api/basket/:id", deleteFromCart);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
