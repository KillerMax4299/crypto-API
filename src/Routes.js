const express = require("express");
const Axios = require("axios");
const router = express.Router();
const dotenv = require("dotenv");
dotenv.config({ path: "./.env" });

router.get("/", function (req, res) {
  res.json({ status: "success", message: "APi Connected" });
});

router.get("/top10", async function (req, res) {
  const { data } = await Axios.get(process.env.API_URL);
  const jsonArray = Object.values(data);
  jsonArray.sort((a, b) => b.last - a.last);
  // const sortedValues = jsonArray
  //   .sort((a, b) => b.last - a.last)
  //   .map((item) => item.last);
  res.json(jsonArray.slice(0, 10));
});

module.exports = router;
