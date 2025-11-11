import mongoose from "mongoose";

interface IOrderItem {
    product: mongoose.Types.ObjectId,
    quantity: number,
}

interface IOrder extends Document{
    user: mongoose.Types.ObjectId,
    items: IOrderItem[],
    totalAmount: number,
    status: "Pending" | "Processing" | "Shipped" | "Delivered" | "Cancelled";
    
}

const orderSchema = new mongoose.Schema<IOrder>({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    items: [
        {
            product: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Product"
            },
            quantity: {
                type: Number,
                required: true
            }
        }
    ],
    totalAmount: {
        type: Number
    },
    status: {
        type: String,
        enum: ["Pending", "Processing", "Shipped", "Delivered", "Cancelled"],
        default: "Pending"
    }
}, { timestamps: true })


export default mongoose.model<IOrder>("Order", orderSchema)