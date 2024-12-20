import { Request, Response, NextFunction } from "express";

export const authMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const token = req.headers.authorization;

  if (!token) {
    res.status(401).json({
      statusCode: 401,
      success: false,
      data: null,
      message: "Unauthorized",
    });
    return;
  }

  if (token !== process.env.AUTH_TOKEN) {
    res.status(403).json({
      statusCode: 403,
      success: false,
      data: null,
      message: "Forbidden",
    });
    return;
  }

  next();
};

export const notFoundMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  res.status(404).json({
    statusCode: 404,
    success: false,
    data: null,
    message: "Route not found",
  });
};

export const generalErrorMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  res.status(500).json({
    statusCode: 500,
    success: false,
    data: null,
    message: "Internal Server Error",
  });
};
