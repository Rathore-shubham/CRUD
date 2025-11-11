import mongoose from "mongoose";

interface IProduct extends mongoose.Document {
    name: string,
    price: number,
    category: string,
    stock: number,
    createdBy: mongoose.Types.ObjectId
}
 
const productSchema = new mongoose.Schema<IProduct>({
    name: String,
    price: Number,
    category: String,
    stock: Number,
    createdBy: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: "User"
    }
}, { timestamps: true })

export default mongoose.model<IProduct>("Product", productSchema)