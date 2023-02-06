import express from "express";
import cors from "cors";
import productRouter from "./src/routes/productRoutes.js";
import authRouter from "./src/routes/authRoutes.js";
import cartRouter from "./src/routes/cartRoutes.js";
import orderRouter from "./src/routes/orderRoutes.js"
import dotenv from "dotenv";
import { connect } from "./src/configs/database.js";

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/product", productRouter);
app.use("/api/auth", authRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);


dotenv.config();

const PORT = process.env.PORT || 8080;
app.listen(PORT, async () => {
  await connect();
  console.log(`server is listening on port ${PORT}`);
});


