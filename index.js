const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const router = require("./src/Routes");
app.use("", router);
app.listen(
  3000,
  console.log("API server is http://localhost:3000")
);
