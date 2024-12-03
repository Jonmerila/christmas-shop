# Christmas Shop

### Starting up

I have made the Backend with a json-server as my "db" and used express as an "api".
I used http://localhost:3000 as my main page.
Product specific pages can be reached with http://localhost:3000/product/<id>
Or by pressing the products in the main page.

### endpoints för json-data:

1. http://localhost:5010/basket - access cart
2. http://localhost:5010/decorations - access products

### Setting up

Run this prompt start json-server:
`npx json-server --watch decorations.json --port 5010`

Run this for frontend:
`npm run dev `

Run tests:
`npx vitest`

Node server:
`node server.mjs`

I tried using Webpack to make my fetching easier but did not have enough knowledge to make it work.

My frontend calls for the express url which in turn fetches the data from the json-server.
