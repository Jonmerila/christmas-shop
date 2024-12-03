import { DetailsModel, ItemsModel } from "../models/ItemsModel.mjs";
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
  const param = req.params.id;
  console.log("PROD ID", param);
  try {
    const response = await fetchData(
      `http://localhost:5010/decorations/${param}`
    );

    console.log("RES", response);

    const item = new DetailsModel(
      response.id,
      response.name,
      response.type,
      response.diameter,
      response.imageUrl,
      response.price,
      response.description
    );
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
    .json({ success: true, result: `movie ID ${req.params.id} works!` });
};
