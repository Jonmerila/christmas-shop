import { DetailsModel, ItemsModel } from "../models/ItemsModel.mjs";
import { fetchData } from "../utilities/httpClient.mjs";

export const getMovies = async (req, res) => {
  // const url = `${process.env.BASE_URL}/discover/movie?api_key=${process.env.API_KEY}&language=en-US`;
  console.log("CONTROLLER URL");
  try {
    const response = await fetchData("discover/movie");
    //part of class data to send to frontend
    const items = [];
    //project data
    response.results.map((item) => {
      items.push(
        new ItemsModel(item.id, item.title, item.poster_path, item.release_date)
      );
    });
    res.status(200).json({
      success: true,
      result: {
        pageNo: response.page,
        totalPage: response.total_pages,
        data: items,
      },
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

export const getMovieById = async (req, res) => {
  const param = req.params.id;
  const url = `${process.env.BASE_URL}/movie/${param}?api_key=${process.env.API_KEY}&language=en-US`;
  console.log("MYURL", url);
  try {
    const response = await fetchData(`movie/${param}`);

    // console.log("DATA", data);

    const item = new DetailsModel(
      response.id,
      response.title,
      response.release_date,
      response.backdrop_path,
      response.genres
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
