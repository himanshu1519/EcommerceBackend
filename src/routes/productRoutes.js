import { Router } from "express";
import {
  createProduct,
  getAllProducts,
  getOne,
} from "../controllers/products.controller.js";
import protect from "../middlewares/authMiddleware.js";

const productRouter = Router();

productRouter.route("/allproducts").get(getAllProducts);
productRouter.route("/createproduct").post(protect, createProduct);
productRouter.route("/getone/:id").get(getOne);
export default productRouter;
