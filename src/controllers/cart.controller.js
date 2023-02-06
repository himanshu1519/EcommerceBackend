import Cart from "../models/cart.model.js";
import Order from "../models/order.model.js";

export const getCartProducts = async (req, res) => {
  try {
    const products = await Cart.find({ userId: req.params.id });
    let total = products.reduce((sum, cur) => {
      return sum + cur.price;
    }, 0);

    res.status(200).json({
      success: true,
      message: "cart products fetched successfully",
      data: products,
      total: total,
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};
export const createCartProduct = async (req, res) => {
  try {
    const product = await Cart.create(req.body);

    res.status(200).json({
      success: true,
      message: "Product is added to cart successfully",
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

export const deleteCart = async (req, res) => {
  try {
    const product = await Cart.findByIdAndDelete(req.params.id);
    return res.status(200).json({
      success: true,
      message: "Product is delete from cart successfully",
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};
