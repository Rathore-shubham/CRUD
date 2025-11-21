import express  from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDb from "./config/db.js";
import authRoutes from "./routes/authRoutes.js"
import productRoutes from "./routes/productRoutes.js"

dotenv.config();
connectDb()

const app = express();
app.use(cors());
app.use(express.json());
// app.use(cookieParser());
app.use("/uploads", express.static("uploads"));

app.get("/", (req,res) => {
    res.send("server running --- ouch ouch ouch 🤦‍♂️😘😁")
})

app.use("/api/auth", authRoutes)
app.use("/api/product", productRoutes)

app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`)
})