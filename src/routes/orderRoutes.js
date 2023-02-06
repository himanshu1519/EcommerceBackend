import { Router } from "express";
import { buyNowCart, getOrderList } from "../controllers/order.controller.js";

import protect from "../middlewares/authMiddleware.js";

const orderRouter = Router();

orderRouter.route("/getorder/:id").get(protect, getOrderList);
orderRouter.route("/order/:id").delete(protect, buyNowCart);
export default orderRouter;
