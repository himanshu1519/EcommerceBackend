import { Router } from "express";
import {
  createCartProduct,
  deleteCart,
  getCartProducts,
} from "../controllers/cart.controller.js";

import protect from "../middlewares/authMiddleware.js";

const cartRouter = Router();

cartRouter.route("/getcart/:id").get(protect, getCartProducts);
cartRouter.route("/createcart").post(protect, createCartProduct);
cartRouter.route("/delete/:id").delete(protect, deleteCart);
export default cartRouter;
