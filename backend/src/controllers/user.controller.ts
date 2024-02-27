import { NextFunction, Request, Response } from "express";
import { User } from "../models/user.model.js";
import { NewUserRequestBody } from "../types/types.js";

export const newUser = async (
  req: Request<{}, {}, NewUserRequestBody>,
  res: Response,
  next: NextFunction
) => {
  try {
    const { name, email, photo, gender, role, _id, dob } = req.body;
    console.log("rol");
    
    const user = await User.create({
      name,
      email,
      photo,
      gender,
      role,
      _id,
      dob,
    });

    return res.status(200).json({
      success: true,
      message: `Welcone, ${user.name}`,
    });
  } catch (error) {
    return res.status(200).json({
      success:false,
      message:error,
    })
  }
};
