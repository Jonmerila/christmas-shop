//BACKEND WITH NODE

//Step 1: imports
import express from "express";
//Cross origin resource sharing - Cors
//Allows us to use another domain to use this code
import cors from "cors";
//Used to read environment variables in node
import dotenv from "dotenv";

//Step start access to .env file config
dotenv.config();
//After writing this line of code, you have access to the .env variables

//Global Variables:
//Get port variable from env OR port 5010
const PORT = process.env.PORT || 5010;
const baseUrl = process.env.BASE_URL;
const apiKey = process.env.API_KEY;

//Steg 3 Get a hold of express in the application
const app = express();

//Step 4, activate your middleware
app.use(cors());

//Jon-code, we set up our routing endpoints here (get,post, put, patch)
// app.get("/", (req, res) => {
//   res.send("<h1>Node is cool</h1>");
// });

//endpoint for a get request
app.get("/api/movies", async (req, res) => {
  const url = `${baseUrl}/discover/movie?api_key=${apiKey}&language=en-US`;

  try {
    const response = await fetch(url);
    if (response.ok) {
      const result = await response.json();
      console.log("RESDATA:", result);
      res.status(200).json({ success: true, result: "Movies work!", result });
      return;
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: `Error, something went to shit, Error: ${error}`,
    });
  }
});

app.get("/api/movies/:id", async (req, res) => {
  const param = req.params.id;
  const url = `${baseUrl}/discover/movie/${param}?api_key=${apiKey}&language=en-US`;
  console.log("MYURL", url);
  try {
    const result = await fetch(url);
    const data = await result.json();
    console.log("RESDATA:", data);
    res.status(200).json({ data, success: true, result: "Movies work!" });
    return;
  } catch (e) {
    res.status(500).json({
      success: false,
      message: `Error with ID, something went to shit, Error: ${e}`,
      statusmsg: status_message,
    });
  }
  res
    .status(200)
    .json({ success: true, result: `movie ID ${req.params.id} works!` });
});

app.get("/api/shows", (req, res) => {
  res.status(200).json({ success: true, result: "Shows work!" });
});
app.get("/api/shows/:id", (req, res) => {
  res
    .status(200)
    .json({ success: true, result: `show ID ${req.params.id} works!` });
});

//Step 5 start server and listen to calls, write the port as parameter
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
