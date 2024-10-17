import express from "express";
import { biographies } from "../../moduls/constant.mjs"; // Array or database for storing biography entries

const getBioRoute = express.Router();

getBioRoute.get("/", (req, res) => {
  if (biographies.length === 0) {
    return res.status(404).json({ message: "No biographies found." });
  }
  res.json(biographies);
});

export default getBioRoute;
