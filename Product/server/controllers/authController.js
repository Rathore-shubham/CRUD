import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = async (req,res) => {
    try {
        const { name, email, password } = req.body;

        const exists = await User.findOne({ email });
        if(exists) return res.status(400).json({ message: "User alredy exists"});

        const hashed = await bcrypt.hash(password, 10);

        const user = await User.create({
            name,
            email,
            password: hashed
        });

        res.json({ message: "registered successfully" , user})

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Server error",
            error
        })
    }
}



export const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });
        if(!user) return res.status(400).json({ message: "Invalid User"});

        const match = await bcrypt.compare(password, user.password);
        if(!match) return res.status(400).json({ message: "Wrong password" });

        const token =  jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1d"})
        res.json({
            token,
            user
        })

    } catch (error) {
        res.status(500).json({
            message: "Server error",
            success: false,
            error
        })
    }
}
