import express from "express";
import multer from "multer";
import fs from "fs";
import { products } from "../../moduls/constant.mjs";
import * as path from "path";

const folderImage = "public/products/";

if (!fs.existsSync(folderImage)) {
  fs.mkdirSync(folderImage, { recursive: true });
}

const addProductsRoute = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, folderImage);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  },
});
const upload = multer({ storage: storage });

addProductsRoute.post("/", upload.single("image"), (req, res) => {
  const newProduct = {
    id: req.body.id || Date.now(),
    name: req.body.name,
    price: req.body.price,
    image: req.file ? path.join(folderImage, req.file.filename) : null,
  };

  if (!newProduct.name || !newProduct.price || !newProduct.image) {
    return res
      .status(400)
      .json({ error: "All fields (name, price, image) are required." });
  }

  products.push(newProduct);
  res.status(201).json(newProduct);
});

export default addProductsRoute;
