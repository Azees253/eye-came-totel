import userModel from "../model/userModel.js";

const addToServies = async (req, res) => {
  try {
    let userData = await userModel.findById(req.body._id);
    let cartData = (await userData?.cartData) || {};

    if (!cartData[req.body.itemId]) {
      cartData[req.body.itemId] = 1;
    }
    await userModel.findByIdAndUpdate(req.body._id, { cartData });
    res.json({ success: true, message: "Added To serviesCart" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error while adding to cart" });
  }
};

const removeToServies = async (req, res) => {
  try {
    let userData = await userModel.findById(req.body._id);
    let cartData = (await userData?.cartData) || {};
    if (cartData[req.body.itemId] > 0) {
      cartData[req.body.itemId] -= 1;
    }
    await userModel.findByIdAndUpdate(req.body._id, { cartData });
    res.json({ success: true, message: "Removed From Cart" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error while removing from cart" });
  }
};

const getTotalAmount = async (req, res) => {
  try {
    let userData = await userModel.findById(req.body._id);
    if (!userData) {
      return res.json({ success: false, message: "User not found" });
    }
    let cartData = await userData.cartData;
    res.json({ success: true, cartData });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error while getting cart data" });
  }
};

export { addToServies, removeToServies, getTotalAmount };
