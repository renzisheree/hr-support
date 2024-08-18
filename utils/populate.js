import { readFile } from "fs/promises";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userModel from "../models/user.model.js";
import jobModel from "../models/job.model.js";
dotenv.config();

try {
  await mongoose.connect(process.env.MONGO_URL);
  const user = await userModel.findOne({ email: "mapneverdie1@gmail.com" });
  const jsonJobs = JSON.parse(
    await readFile(new URL("./mock_data.json", import.meta.url))
  );
  const jobs = jsonJobs.map((job) => {
    return { ...job, createdBy: user._id };
  });
  await jobModel.deleteMany({ createdBy: user._id });
  await jobModel.create(jobs);
  console.log("success");
  process.exit(0);
} catch (error) {
  console.log(error);
  process.exit(1);
}
