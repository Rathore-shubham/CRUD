import express from "express";
import bcrypt from "bcrypt";
import jwt, { sign } from "jsonwebtoken";
import User from "../models/User";

const router = express.Router();


const signToken = (user) => {
    const payload = { id: user._id, email: user.email };
    return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "1h" })
};


router.post("/signup", async (req, res) => {
    try {
        const { name, email, password } = req.body;
        if(!name || !email || !password) return res.status(400).json({ message: "Name, email and password are required"})

        const existing = await User.findOne({ email });
        if(existing) return res.status(409).json({ message: "Email already exists"})    

        const saltRounds = parseInt()
        const hashed = await bcrypt.hash(password, saltRounds);

        const user = await User.create({ name, email, password: hashed});
        const token = signToken(user)

        res.status(201).json({
            user: {
                id: user._id,
                name: user.name,
                email: user.email
            },
            token
        })
    } catch (error) {
        console.error(err)
        res.status(500).json({ message: "Server error"})
    }    
})

router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;
        if(!email || !password ) return res.status(400).json({ message: "Email and password are required"})

        const user = await User.findOne({ email });
        if(!user) return res.status(401).json({ message: "Invalid credentails"});

        const match = await bcrypt.compare(password, user.password);
        if(!match) return res.status(401).json({ message: "Invalid credentails" });

        const token = signToken(user);
        res.status(200).json({
            user: {
                id: user._id,
                name: user.name,
                email: user.email
            },
            token
        })
    } catch (error) {
        console.error(err)
    }
})