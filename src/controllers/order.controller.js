import Cart from "../models/cart.model.js";
import Order from "../models/order.model.js";

export const getOrderList = async (req, res) => {
  try {
    const orders = await Order.find({ userId: req.params.id });
    if (orders.length === 0) {
      return res
        .status(200)
        .json({ success: false, message: "No items are ordered" });
    } else {
      return res.status(200).json({
        success: true,
        data: orders,
        message: "Order list is here",
      });
    }
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

export const buyNowCart = async (req, res) => {
  try {
    const products = await Cart.find({ userId: req.params.id });
    if (products.length === 0) {
      return res
        .status(200)
        .json({ success: false, message: "No items in cart" });
    }
    for (let i = 0; i < products.length; i++) {
      let product = new Order({
        title: products[i].title,
        gender: products[i].gender,
        description: products[i].description,
        category: products[i].category,
        price: products[i].price,
        size: products[i].size,
        color: products[i].color,
        rating: products[i].rating,
        img: products[i].img,
        userId: products[i].userId,
        productId: products[i].productId,
      });
      await product.save();
    }

    await Cart.deleteMany({ userId: req.params.id });
    res
      .status(200)
      .send({ success: true, message: "Products are added to orderlist" });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};
