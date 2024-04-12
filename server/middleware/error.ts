import ErrorHandler from "../utils/errorhandler";
import { Request, Response, NextFunction } from "express";

export const ErrorMiddleware = (err: any, req: Request, res: Response, next: NextFunction) => {
  err.statusCode = err.statusCode || 500;
  err.message = err.message || "Internal Server Error!!";

  //wrong Moogodb id
  if (err.name === "CastError") {
    const message = `Resource not Founded.Invalid Error ${err.path}`;
    err = new ErrorHandler(message, 400);
  }
  //Duplicate Key Error
  if (err.code === 11000) {
    const message = `Duplicate Key Error,${Object.keys(err.keyValue)} entered`;
    err = new ErrorHandler(message, 400);
  }
  //jwt Token Expired Error
  if (err.name === "TokenExpiredError") {
    const message = `JWT Token Experied please try again later`;
    err = new ErrorHandler(message, 400);
  }
  res.status(err.statusCode).json({
    success: false,
    message: err.message,
  });
};
