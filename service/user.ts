import { Request, Response } from "express";
import UserEntity, { User } from "../models/user";

export const login = async (req: Request, res: Response) => {
  try {
    const user: User = req.body.body;
    console.log("USER LOGIN", user);
    const userExist = await UserEntity.findOne({
      where: {
        name: user.name,
        password: user.password,
      },
    });
    if (userExist) {
      return res.status(200).json([userExist]); 
    }else{
      return res.status(404).json('No existe el usuario'); 
    }
  } catch (error) {
    return res.status(500).json(error);
  }
};
