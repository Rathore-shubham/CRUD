import express from "express";
import { createProduct, getProducts, getStats } from "../controllers/product.controller";
import { auth, isAdmin } from "../middleware/auth";

const router = express.Router();
router.post("/", auth, isAdmin, createProduct);
router.get("/", getProducts);
router.get("/stats", auth, isAdmin, getStats);

export default router;
