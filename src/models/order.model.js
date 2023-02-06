import mongoose from "mongoose";
const { Schema, model } = mongoose;
const reqString = { type: String, required: true };
const reqNumber = { type: Number, required: true };
const reqArray = { type: Array, required: true };

const orderSchema = new Schema(
  {
    title: reqString,
    gender: reqString,
    description: reqString,
    category: reqString,
    price: reqNumber,
    size: reqArray,
    color: reqString,
    rating: reqNumber,
    img: reqArray,
    userId: reqString,
    productId: reqString,
  },
  {
    versionKey: false,
  }
);

const Order = model("order", orderSchema);
export default Order;
