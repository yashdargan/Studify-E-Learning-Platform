require("dotenv").config();
import express, { Request, Response, NextFunction } from "express";
export const app = express();
import cors from "cors";
import cookieParser from "cookie-parser";
import ErrorHandler from './middleware/error' 
//body Parser
app.use(express.json({ limit: "50mb" }));

//cookieParser: use to send data from backend to frontend
app.use(cookieParser());

//cors => cross origin resource sharing
app.use(
  cors({
    origin: process.env.ORIGIN,
  }),
);

//test an API
app.get("/test", (req: Request, res: Response, next: NextFunction) => {
  res.status(200).json({
    success: true,
    message: "API is Working",
  });
});

//unknown routes

app.get("*", (req: Request, res: Response, next: NextFunction) => {
  const err = new Error(`Route ${req.originalUrl} not founded`) as any;
  err.statusCode = 404;
  next(err);
});
