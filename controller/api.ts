import { updateUser, fetchUser } from "../repository/userCollection";
import { User } from "../entities/user";
import { Request, Response } from "express";

export const updateUserData = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const user: User = req.body;

    if (!user || !user.email) {
      res.status(400).json({
        statusCode: 400,
        success: false,
        data: null,
        message: "Email parameter is required",
      });
      return;
    }

    await updateUser(user);

    res.status(200).json({
      statusCode: 200,
      success: true,
      data: user,
      message: "Update User Successfully",
    });
  } catch (error) {
    res.status(400).json({
      statusCode: 400,
      success: false,
      data: null,
      message: error instanceof Error ? error.message : "Bad Request",
    });
  }
};

export const fetchUserData = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const email: string = req.params.email;

    if (!email) {
      res.status(400).json({
        statusCode: 400,
        success: false,
        data: null,
        message: "Email parameter is required",
      });
      return;
    }

    const user = await fetchUser(email);

    if (!user) {
      res.status(404).json({
        statusCode: 404,
        success: false,
        data: null,
        message: "User not found",
      });
      return;
    }

    res.status(200).json({
      statusCode: 200,
      success: true,
      data: user,
      message: "Get User Successfully",
    });
  } catch (error) {
    res.status(400).json({
      statusCode: 400,
      success: false,
      data: null,
      message: error instanceof Error ? error.message : "Bad Request",
    });
  }
};
