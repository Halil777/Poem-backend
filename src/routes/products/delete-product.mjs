import express from "express";
import { products } from "../../moduls/constant.mjs";

const deleteProductsRoute = express.Router();

deleteProductsRoute.delete("/:id", (req, res) => {
  const productId = parseInt(req.params.id);

  const productIndex = products.findIndex(
    (product) => product.id === productId
  );

  if (productIndex !== -1) {
    products.splice(productIndex, 1);
    res.status(204).send();
  } else {
    res.status(404).json({ error: "Product not found." });
  }
});

export default deleteProductsRoute;
