import mongoose from "mongoose";
import jobModel from "../models/job.model.js";
import JobModel from "../models/job.model.js";
import { StatusCodes } from "http-status-codes";
import dayjs from "dayjs";

export const getJob = async (req, res) => {
  const job = await JobModel.findById(req.params.id);

  res.status(StatusCodes.OK).json({
    success: true,
    data: job,
  });
};

export const getJobs = async (req, res) => {
  const jobs = await JobModel.find({ createdBy: req.user.userId });
  res.status(StatusCodes.OK).json({
    success: true,
    data: jobs,
  });
};
export const createJob = async (req, res) => {
  req.body.createdBy = req.user.userId;
  const job = await JobModel.create(req.body);
  res.status(StatusCodes.CREATED).json({
    success: true,
    data: job,
  });
};

export const updateJob = async (req, res) => {
  const updatedJob = await JobModel.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(StatusCodes.OK).json({
    success: true,
    msg: "Job modified",
    data: updatedJob,
  });
};

export const deleteJob = async (req, res) => {
  const job = await JobModel.findByIdAndDelete(req.params.id);

  res.status(StatusCodes.OK).json({
    success: true,
    msg: "Job deleted",
    data: {},
  });
};

export const showStats = async (req, res) => {
  let stats = await jobModel.aggregate([
    { $match: { createdBy: new mongoose.Types.ObjectId(req.user.userId) } },
    { $group: { _id: "$jobStatus", count: { $sum: 1 } } },
  ]);
  stats = stats.reduce((acc, curr) => {
    const { _id: title, count } = curr;
    acc[title] = count;
    return acc;
  }, {});
  const defaultStatus = {
    pending: stats.pending || 0,
    interview: stats.interview || 0,
    declined: stats.declined || 0,
  };
  let monthlyApplication = await jobModel.aggregate([
    { $match: { createdBy: new mongoose.Types.ObjectId(req.user.userId) } },
    {
      $group: {
        _id: { year: { $year: "$createdAt" }, month: { $month: "$createdAt" } },
        count: { $sum: 1 },
      },
    },
    { $sort: { "_id.year": -1, "_id.month": -1 } },
    { $limit: 6 },
  ]);
  monthlyApplication = monthlyApplication
    .map((item) => {
      const {
        _id: { year, month },
        count,
      } = item;
      const date = dayjs()
        .month(month - 1)
        .year(year)
        .format("MMM YY");
      return { date, count };
    })
    .reverse();
  res.status(StatusCodes.OK).json({ defaultStatus, monthlyApplication });
};
