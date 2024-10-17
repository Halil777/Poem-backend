import express from "express";
import getProductsRoute from "./products/get-product.mjs";
import addProductsRoute from "./products/add-product.mjs";
import updateProductsRoute from "./products/update-product.mjs";
import deleteProductsRoute from "./products/delete-product.mjs";
import getPoemsRoute from "./poems/get-poems.mjs";
import addPoemRoute from "./poems/add-poems.mjs";
import getBioRoute from "./biography/get-bio.mjs";
import addBioRoute from "./biography/add-bio.mjs";

const router = express.Router();

router.use("/products", getProductsRoute);
router.use("/products", addProductsRoute);
router.use("/products", updateProductsRoute);
router.use("/products", deleteProductsRoute);
// poems routes

router.use("/poems", getPoemsRoute);
router.use("/poems", addPoemRoute);

// bio routes
router.use("/bio", getBioRoute);
router.use("/bio", addBioRoute);

export { router };
