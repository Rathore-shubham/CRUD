import express from "express"
import auth from "../middleware/auth.js"
import upload from "../middleware/upload.js"
import { createProduct, getProducts,updateProduct, deleteProduct } from "../controllers/productController.js"

const router = express.Router();

router.post("/", auth, upload.single("img"), createProduct)
router.get("/", auth, getProducts)
router.put("/:id", auth, upload.single("img"), updateProduct)
router.delete("/:id", auth, deleteProduct)


export default router;