import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config()

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI as string);
        console.log("Mongo connected")
    } catch (error) {
        console.error("DB connecttion failed", error)
        process.exit(1)
    }
}

export default connectDB;