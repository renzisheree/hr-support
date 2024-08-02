import { body, param, validationResult } from "express-validator";
import { BadRequestError, NotFoundError } from "../errors/customErrors.js";
import { JOB_STATUS, JOB_TYPE } from "../utils/constants.js";
import mongoose from "mongoose";
import jobModel from "../models/job.model.js";

const withValidationErrorrs = (validateValues) => {
  return [
    validateValues,
    (req, res, next) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        const errorMessages = errors.array().map((error) => error.msg);

        if (errorMessages[0].startsWith("no job")) {
          throw new NotFoundError(errorMessages);
        }
        throw new BadRequestError(errorMessages);
      }
      next();
    },
  ];
};

export const validateJobInput = withValidationErrorrs([
  body("company").notEmpty().withMessage("Company is required"),
  body("position").notEmpty().withMessage("Position is required"),
  body("jobLocation").notEmpty().withMessage("JobLocation is required"),
  body("jobStatus")
    .isIn(Object.values(JOB_STATUS))
    .withMessage("Invalid status value"),
  body("jobType")
    .isIn(Object.values(JOB_TYPE))
    .withMessage("Invalid type value"),
]);

export const validateIdParam = withValidationErrorrs([
  param("id").custom(async (value) => {
    const isValidId = mongoose.Types.ObjectId.isValid(value);

    if (!isValidId) throw new BadRequestError("Invalid mongodb id");
    const job = await jobModel.findById(value);
    if (!job) throw new NotFoundError(`no job was found with id ${value}`);
  }),
]);
