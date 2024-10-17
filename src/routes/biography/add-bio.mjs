import express from "express";
import fs from "fs";
import * as path from "path";
import { biographies } from "../../moduls/constant.mjs"; 

const addBioRoute = express.Router();

addBioRoute.post("/", (req, res) => {
  const { birth_date, died_date, name, description } = req.body;

  const newBio = {
    id: Date.now(),
    birth_date,
    died_date,
    name,
    description,
  };

  // Validate required fields
  if (!newBio.name || !newBio.birth_date || !newBio.description) {
    return res.status(400).json({
      error: "All fields (birth_date, name, description) are required.",
    });
  }

  // Add new biography to the array
  biographies.push(newBio);
  res.status(201).json(newBio);
});

export default addBioRoute;
