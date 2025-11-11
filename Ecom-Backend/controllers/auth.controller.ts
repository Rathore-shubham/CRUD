import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import User from "../models/user.model";

export const register = async (req: Request, res: Response) => {
    const { name, email, password } = req.body;
    const user = await User.create({ name, email, password });
    res.status(201).json(user);
};


export const login = async (req: Request, res: Response) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email});
    if(!user || !(await user.comparePassword(password))) return res.status(400).json({
        msg: "Invalid credentials"
    })

    const token = jwt.sign({ id: user._id}, process.env.JWT_SECRET as string, { expiresIn: "1d" })
    res.json(token)
}