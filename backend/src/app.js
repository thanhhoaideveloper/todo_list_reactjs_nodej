const express = require("express");
const app = express();
require("dotenv").config();
const MainRoute = require("./routes");
const bodyParser = require("body-parser");
const cors = require("cors");

const PORT = process.env.APP_PORT;
const HOST = process.env.APP_HOST;

//config
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors({}));

//route
MainRoute(app);

require("./config/db");

app.listen(PORT, () => {
  console.log(`Server start on ${HOST}:${PORT}`);
});
