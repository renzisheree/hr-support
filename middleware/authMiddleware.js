import {
  UnauthenticatedError,
  BadRequestError,
} from "../errors/customErrors.js";
import { verifyJWT } from "../utils/tokenUltil.js";

export const authenticateUser = async (req, res, next) => {
  const { token } = req.cookies;
  if (!token) throw new UnauthenticatedError("authentication invalid");
  try {
    const { userId, role } = verifyJWT(token);
    const testUser = userId === "66c25af0c7aa93b32093ffdb";
    req.user = { userId, role, testUser };
    next();
  } catch (error) {
    throw new UnauthenticatedError("authentication invalid");
  }
};

export const authorizePermissions = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role))
      throw new UnauthenticatedError("Unauthorize to access this route");

    next();
  };
};

export const checkForTestUser = (req, res, next) => {
  if (req.user.testUser)
    throw new BadRequestError("Người dùng thử nghiệm, Chỉ đọc..!");
  next();
};
