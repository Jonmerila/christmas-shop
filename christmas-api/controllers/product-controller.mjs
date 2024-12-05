import { ItemsModel } from "../models/ItemsModel.mjs";
import { fetchData } from "../utilities/httpClient.mjs";

export const getProducts = async (req, res) => {
  try {
    const response = await fetchData("http://localhost:5010/decorations");
    console.log("SERVER API", response);
    res.status(200).json(response);
    return;
  } catch (error) {
    res.status(400).json({ message: "Something went wrong", error });
  }
};

export const getProductById = async (req, res) => {
  const { id } = req.params;
  console.log("PROD ID", id);
  try {
    const response = await fetchData(`http://localhost:5010/decorations/${id}`);

    if (!response) {
      return res
        .status(404)
        .json({ success: false, message: `Product with ID ${id} not found` });
    }
    console.log("controller data", response);
    const item = new ItemsModel(
      response.id,
      response.name,
      response.type,
      response.description,
      response.imageUrl,
      response.price,
      response.dimensions || null,
      response.diameter,
      response.height || null,
      response.quantity,
      response.length || null
    );
    console.log("Final res", item);
    res.status(200).json({ success: true, result: item });
    return;
  } catch (e) {
    res.status(500).json({
      success: false,
      message: `Error with ID, something went to shit, Error: ${e}`,
    });
  }
  res
    .status(200)
    .json({ success: true, result: `Product ID ${req.params.id} works!` });
};
