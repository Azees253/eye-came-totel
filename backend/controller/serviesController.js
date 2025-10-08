import serviesModel from "../model/ServiesModel.js";
import userModel from "../model/userModel.js";

const placerequest = async (req, res) => {
  try {
    const itemsTotal = req.body.items.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);

    const newOrder = new serviesModel({
      userId: req.body._id,
      items: req.body.items,
      amount: req.body.amount,
      address: req.body.address,
      status: "Process this Items",
      date: Date.now(),
      payment: false,
      paymentMethod: "COD",
    });

    await newOrder.save();
    await userModel.findByIdAndUpdate(req.body._id, { cartData: {} });

    res.json({
      success: true,
      message: "Order Placed Successfully",
      orderId: newOrder._id,
      totalAmount: itemsTotal,
    });
  } catch (error) {
    console.log("Error in placeOrder:", error);
    res.json({
      success: false,
      message: "Error while placing order",
    });
  }
};

const userrequest = async (req, res) => {
  try {
    const orders = await serviesModel.find({ userId: req.body._id });
    res.json({
      success: true,
      data: orders,
    });
  } catch (error) {
    console.log("Error in userOrder:", error);
    res.json({
      success: false,
      message: "Error placing user orders",
    });
  }
};

const requestlist = async (req, res) => {
  try {
    const orders = await serviesModel.find({});
    res.json({ success: true, data: orders });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error in listing orders" });
  }
};

const updateStatus = async (req, res) => {
  try {
    await serviesModel.findByIdAndUpdate(req.body.orderId, {
      status: req.body.status,
    });
    res.json({ success: true, message: "Order status updated successfully" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error in updating order status" });
  }
};

export { placerequest, userrequest, requestlist, updateStatus };
