import { DetailsModel, ItemsModel } from "../models/ItemsModel.mjs";
import { fetchData } from "../utilities/httpClient.mjs";

export const getProducts = async (req, res) => {
  // const url = `${process.env.BASE_URL}/discover/movie?api_key=${process.env.API_KEY}&language=en-US`;
  console.log("CONTROLLER URL");
  try {
    const response = await fetchData("http://localhost:5010/decorations");
    //part of class data to send to frontend
    const items = [];
    //project data
    response.results.map((item) => {
      items.push(
        new ItemsModel(
          item.id,
          item.name,
          item.type,
          item.diameter,
          item.imageUrl,
          item.price,
          item.description
        )
      );
    });
    res.status(200).json({
      success: true,
      result: { data: items },
    });
    console.log("ITEMS", items);
    return;
  } catch (error) {
    res.status(500).json({
      success: false,
      message: `Error, something went to shit, Error: ${error}`,
    });
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
