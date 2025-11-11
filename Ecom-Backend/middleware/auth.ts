import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import User from "../models/user.model";

interface AuthRequest extends Request{
    user?: any
}

export const auth = async (req: AuthRequest, res: Response, next: NextFunction) => {
    try {
        const token = req.headers.authorization?.split(" ")[1];
        if(!token) return res.status(401).json({ msg: "NO token, unauthorized"});

        const decoded: any = jwt.verify(token, process.env.JWT_SECRET as string);
        req.user = await User.findById(decoded.id).select("-password")
        next()
    } catch (error) {
        res.status(401).json({ msg: "Token Invalid" })
    }
}


export const isAdmin = (req: AuthRequest, res: Response, next: NextFunction) => {
    if(req.user?.role !== "admin") return res.status(403).json({ msg: "Access denied"})
    next()
}