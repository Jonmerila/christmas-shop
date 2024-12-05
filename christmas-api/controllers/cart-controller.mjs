import { ItemsModel } from "../models/ItemsModel.mjs";
import { fetchData } from "../utilities/httpClient.mjs";

export const getCart = async (req, res) => {
  console.log("GETTING CART...");
  try {
    const response = await fetchData("http://localhost:5010/basket");
    res.status(200).json(response);
    return;
  } catch (error) {
    res
      .status(400)
      .json({ message: "Something went wrong with getting cart", error });
  }
};

export const addToCart = async (req, res) => {
  const cartItem = req.body;
  console.log("CART BODY", cartItem);
  const url = "http://localhost:5010/basket";
  if (!cartItem) {
    throw new Error(
      `Failed to update basket, no body detected. Response: ${res}`
    );
  }
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(cartItem),
    });
    if (!response.ok) {
      throw new Error(`Failed to update basket, Response: ${response}`);
    }
    res.status(200).json({ message: "Item added to cart successfully" });
    console.log("Cart updated");
  } catch (e) {
    console.error("Error adding to basket", e);
  }
};
