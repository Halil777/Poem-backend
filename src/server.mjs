import express from "express";
import cors from "cors";
import { router } from "./routes/router.mjs";
import path from "path";

const app = express();
const port = 7575;

app.use(cors());

app.use("/public", express.static("public"));
app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));

app.use("/api", router);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

app.listen(port, () =>
  console.log(`App is running on http://localhost:${port}`)
);
