import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config()

const connectDb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Mongo connected")
    } catch (error) {
        console.error(error)
    }
}

export default connectDb;