import express from "express";
import { poems } from "../../moduls/constant.mjs";

const getPoemsRoute = express.Router();

getPoemsRoute.get("/", (req, res) => {
  res.json(poems);
});

export default getPoemsRoute;
