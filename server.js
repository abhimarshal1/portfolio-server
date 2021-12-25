const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const morgan = require("morgan");

require("dotenv").config();

mongoose.Promise = global.Promise;

const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME, DB_PORT } = process.env;

const MONGODB_URI = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`;

console.log(MONGODB_URI);

mongoose
  .connect(MONGODB_URI, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Successfully connected to the database");
  })
  .catch((err) => {
    console.log("Could not connect to the database. Error...", err);
    process.exit();
  });

const app = express();

app.use(cors());

app.use(morgan("combined"));

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

require("./app/routes/app.routes.js")(app);

app.listen(DB_PORT, () => {
  console.log(`Server is listening on port ${DB_PORT}`);
});
