import Product from "../models/Product.js";

export const createProduct = async (req, res) => {
    try {
        const { title, price } = req.body;
        const image = req.file ? req.file.filename: null;

        const product = await Product.create({
            title,
            price,
            image,
            user: req.user.id
        })

        res.json(product)

    } catch (error) {
        res.status(500).json({
            message: "Server error",
            success: false,
            error
        })
    }
}


export const getProducts = async (req, res) => {
    try {
        const products = await Product.find().populate("user");
        res.json(products)
        
    } catch (error) {
        res.status(500).json({
            message: "Server error",
            success: false,
            error
        })
    }
}


export const updateProduct = async (req, res) => {
    try {
        const { title, price } = req.body;
        const image = req.file ? req.file.filename : undefined;

        const product = await Product.findByIdAndUpdate(
            req.params.id,
            { title, price, ...(image && { image })},
            { new: true }
        )

        res.json(product)
    } catch (error) {
        res.status(500).json({
            message: "Server error",
            success: false,
            error
        })
    }
}

export const deleteProduct = async (req, res) => {
    await Product.findByIdAndDelete(req.params.id);
    res.json({
        message: "Product deleted",
        success: true
    })
}