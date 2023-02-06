import mongoose from "mongoose";
const { Schema, model } = mongoose;
const reqString = { type: String, required: true };
const reqNumber = { type: Number, required: true };
const reqArray = { type: Array, required: true };

const allProductSchema = new Schema(
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
  },
  {
    versionKey: false,
  }
);

const AllProduct = model("allProduct", allProductSchema);
export default AllProduct;
