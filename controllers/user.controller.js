import userModel from "../models/user.model.js";
import { StatusCodes } from "http-status-codes";

export const Register = async (req, res) => {
  const user = await userModel.create(req.body);
  res.status(StatusCodes.CREATED).json({ success: true, data: user });
};
export const Login = async (req, res) => {
  res.send({ success: true });
};
