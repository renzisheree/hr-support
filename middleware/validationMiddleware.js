import { body, param, validationResult } from "express-validator";
import {
  BadRequestError,
  NotFoundError,
  UnauthorizedError,
} from "../errors/customErrors.js";
import { JOB_STATUS, JOB_TYPE } from "../utils/constants.js";
import mongoose from "mongoose";
import jobModel from "../models/job.model.js";
import userModel from "../models/user.model.js";

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
        if (errorMessages[0].startsWith("not authorized")) {
          throw new UnauthorizedError("not authorized to access this route");
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
  body("JobLocation").notEmpty().withMessage("JobLocation is required"),
  body("jobStatus")
    .isIn(Object.values(JOB_STATUS))
    .withMessage("Invalid status value"),
  body("jobType")
    .isIn(Object.values(JOB_TYPE))
    .withMessage("Invalid type value"),
]);

export const validateIdParam = withValidationErrorrs([
  param("id").custom(async (value, { req }) => {
    const isValidId = mongoose.Types.ObjectId.isValid(value);

    if (!isValidId) {
      throw new BadRequestError("Invalid mongodb id");
    }
    const job = await jobModel.findById(value);
    if (!job) {
      throw new NotFoundError(`no job was found with id ${value}`);
    }
    const isAdmin = req.user.role === "admin";
    const isOwneer = req.user.userId === job.createdBy.toString();
    if (!isAdmin && !isOwneer)
      throw new UnauthorizedError("not authorized to access this route");
  }),
]);

export const validateRegisterInput = withValidationErrorrs([
  body("name").notEmpty().withMessage("Name is required"),
  body("email")
    .notEmpty()
    .withMessage("Email is required")
    .custom(async (email) => {
      const user = await userModel.findOne({ email });
      if (user) {
        throw new BadRequestError("There are user with that email");
      }
    }),
  body("password")
    .notEmpty()
    .withMessage("Password is required")
    .isLength({ min: 8 })
    .withMessage("Password must be at least 8 characters"),
  body("location").notEmpty().withMessage("Location is required"),
  body("lastName").notEmpty().withMessage("Last name is required"),
]);
export const validateLoginInput = withValidationErrorrs([
  body("email")
    .notEmpty()
    .withMessage("Email must not be empty")
    .isEmail()
    .withMessage("Please enter invalid email format"),
  body("password")
    .notEmpty()
    .withMessage("Password must not be empty")
    .isLength({ min: 8 })
    .withMessage("Password must be at least 8 characters"),
]);

export const validateUpdateInput = withValidationErrorrs([
  body("name").notEmpty().withMessage("Name is required"),
  body("email")
    .notEmpty()
    .withMessage("Email is required")
    .custom(async (email, { req }) => {
      const user = await userModel.findOne({ email });
      if (user && user._id.toString() !== req.user.userId) {
        throw new BadRequestError("There are user with that email");
      }
    }),

  body("location").notEmpty().withMessage("Location is required"),
  body("lastName").notEmpty().withMessage("Last name is required"),
]);
