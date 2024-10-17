import express from "express";
import { products } from "../../moduls/constant.mjs";

const updateProductsRoute = express.Router();

updateProductsRoute.put("/:id", (req, res) => {
  const productId = parseInt(req.params.id);
  const { name, price, image } = req.body;

  const productIndex = products.findIndex(
    (product) => product.id === productId
  );

  if (productIndex !== -1) {
    products[productIndex] = { id: productId, name, price, image };
    res.status(200).json(products[productIndex]);
  } else {
    res.status(404).json({ error: "Product not found." });
  }
});

export default updateProductsRoute;
