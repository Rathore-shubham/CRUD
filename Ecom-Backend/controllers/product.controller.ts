import { Request, Response } from "express";
import Product from "../models/product.model";

export const createProduct = async (req: any, res: Response) => {
    const product = await Product.create({ ...req.body, createdBy: req.user._id })
}


export const getProducts = async (_: Request, res: Response) => {
    const products = await Product.find().populate("createdBy", "name email");
    res.json(products)
}

export const getStats = async (_: Request, res: Response) => {
    const stats = await Product.aggregate([
        { $group: { _id: "$category", totalProductd: { $sum: 1 }, avgPrice: { $avg: "$price" }}}
    ])
}