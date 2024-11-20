// //BACKEND WITH NODE

// //Step 1: imports
// import express from "express";
// //Cross origin resource sharing - Cors
// //Allows us to use another domain to use this code
// import cors from "cors";
// //Used to read environment variables in node
// import dotenv from "dotenv";

// import products from "./routes/product-routes.mjs";
// // import shows from "./routes/show-routes.mjs";

// //Step start access to .env file config
// dotenv.config();
// //After writing this line of code, you have access to the .env variables

// //Global Variables:
// //Get port variable from env OR port 5010
// const PORT = process.env.PORT || 5010;

// //Steg 3 Get a hold of express in the application
// const app = express();

// //Step 4, activate your middleware
// // app.use(cors());

// app.use(express.json());
// //step 4.5, set up your routes and controllers, include them here

// //Jon-code, we set up our routing endpoints here (get,post, put, patch)
// // app.get("/", (req, res) => {
// //   res.send("<h1>Node is cool</h1>");
// // });

// //Step 5 start server and listen to calls, write the port as parameter
// app.listen(PORT, () =>
//   console.log(`Server is running on port ${process.env.PORT}`)
// );
