import express from "express";
import {
  createProducts,
  deleteProducts,
  getProductsById,
  listProducts,
  updateProducts,
} from "../../controllers/products.controller";

const router = express.Router();

router.get("/products", listProducts);
router.get("/products/:id", getProductsById);
router.post("/products", createProducts);
router.put("/products/:id", updateProducts);
router.delete("/products/:id", deleteProducts);

export default router;
