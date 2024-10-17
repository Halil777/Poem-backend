import express from "express";
import { products } from "../../moduls/constant.mjs";

const getProductsRoute = express.Router();

getProductsRoute.get("/", (req, res) => {
  res.json(products);
});

export default getProductsRoute;
