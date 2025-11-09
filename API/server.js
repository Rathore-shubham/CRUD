import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors"
import { authMiddleware } from "./middleware/Auth";
import User from "./models/User"


dotenv.config()
const app = express()

app.use(cors({
    origin: "",
    credentials: true
}))

app.use(express.json());

mongoose.connect("")
    .then(() => console.log("Mongo connected"))
    .catch((err) => console.error("Error connecting mongo", err));


app.use("/api/auth",authMiddleware);

app.get("/api/profile", authMiddleware, async (req,res) => {
    try {
        const user = await User.findById(req.user.id).select("-password");
        res.status(200).json({ user });
    } catch (error) {
        res.status(500).json({
            message: "Server error",
            success: false,
        })
    }    
})

app.listen(5000, () => {
    console.log(`Server running on port 5000`)
})