import "express-async-errors";
import * as dotenv from "dotenv";
import express from "express";
import morgan from "morgan";
import mongoose from "mongoose";
import { body, validationResult } from "express-validator";

dotenv.config();

const app = express();

import jobRouter from "./routes/job.routes.js";

//middleware
import ErrorHandlerMiddleware from "./middleware/errorHandlerMiddleware.js";
import errorHandlerMiddleware from "./middleware/errorHandlerMiddleware.js";

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(morgan("dev"));
app.use(express.json());
app.get("/", (req, res) => {
  res.send("hello ");
});
app.post("/", (req, res, next) => {
  console.log(req);
  res.json({
    message: "data received",
    data: req.body,
  });
});

app.use("/api/v1/jobs", jobRouter);

app.use("*", (req, res) => {
  res.status(404).json({
    success: false,
    msg: "Not found",
  });
});
app.use(errorHandlerMiddleware);

app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).json({ msg: "Something went wrong" });
});

const port = process.env.PORT || 5100;
try {
  await mongoose.connect(process.env.MONGO_URL);
  app.listen(port, () => {
    console.log("Server running on port " + port);
  });
} catch (err) {
  console.log(err);
  process.exit(1);
}
