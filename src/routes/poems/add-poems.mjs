import express from "express";
import { poems } from "../../moduls/constant.mjs";

const addPoemRoute = express.Router();

addPoemRoute.post("/", (req, res) => {
  const newPoem = {
    id: req.body.id,
    title: req.body.title,
    poem: req.body.poem,
  };

  if (!newPoem.title || !newPoem.poem) {
    return res
      .status(400)
      .json({ error: "All fields (title, poem) are required." });
  }

  poems.push(newPoem);
  res.status(201).json(newPoem);
});

export default addPoemRoute;
