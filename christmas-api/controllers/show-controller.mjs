import { ItemsModel, DetailsModel } from "../models/ItemsModel.mjs";
import { fetchData } from "../utilities/httpClient.mjs";

export const getShows = async (req, res) => {
  const url = `${process.env.BASE_URL}/discover/tv?api_key=${process.env.API_KEY}&language=en-US`;
  try {
    console.log("SHOWURL", url);
    const response = await fetchData("discover/tv");
    const items = [];

    console.log("!!!!RESPONSE", response);
    response.results.map((item) => {
      items.push(
        new ItemsModel(
          item.id,
          item.name,
          item.poster_path,
          item.first_air_date
        )
      );
    });

    res.status(200).json({ success: true, result: items });
    return;
  } catch (error) {
    res.status(500).json({
      success: false,
      message: `Error, something went to shitshow, Error: ${error}`,
    });
  }
};

export const getShowById = async (req, res) => {
  const param = req.params.id;
  const url = `${process.env.BASE_URL}/tv/${param}?api_key=${process.env.API_KEY}&language=en-US`;
  console.log("MYURL", url);
  try {
    const result = await fetchData(`tv/${param}`);

    const item = new DetailsModel(
      result.id,
      result.name,
      result.genres,
      result.episodes,
      result.backdrop_path,
      result.first_air_date,
      result.runtime,
      result.poster_path
    );

    // super(id, title, releaseDate);
    // this.backgroundImage = backgroundImage;
    // this.genres = genres;
    // this.episodes = episodes;
    // this.runtime = runtime;

    // id,
    // title,
    // genres,
    // episodes,
    // runtime,
    // releaseDate,
    // backgroundImage
    res.status(200).json({ result: item, success: true });
    return;
  } catch (e) {
    res.status(500).json({
      success: false,
      message: `Error with ID, something went to shit, Error: ${e}`,
    });
  }
  res
    .status(200)
    .json({ success: true, result: `Shows ID ${req.params.id} works!` });
};
