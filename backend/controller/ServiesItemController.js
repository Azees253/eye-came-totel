import ServiesItemModel from "../model/ServiesItemModel.js";
import fs from "fs";

const addServies = async (req, res) => {
  let image_filename = `${req.file && req.file.filename}`;

  const item = new ServiesItemModel({
    name: req.body.name,
    description: req.body.description,
    servies: req.body.servies,
    image: image_filename,
    category: req.body.category,
  });
  try {
    await item.save();
    res.json({
      success: true,
      message: "Servies added successfully",
    });
  } catch (err) {
    console.log(err);
    res.json({
      success: false,
      message: "Failed to add servies",
    });
  }
};

const ListServies = async (req, res) => {
  try {
    const items = await ServiesItemModel.find({});
    res.json({
      success: true,
      data: items,
    });
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: "Failed to Fetch Items ",
    });
  }
};

const removeServies = async (req, res) => {
  try {
    const items = await ServiesItemModel.findById(req.body.id);
    fs.unlink(`serviesUploads/${items.image}`, () => {});
    await ServiesItemModel.findByIdAndDelete(req.body.id);
    res.json({
      success: true,
      message: "Item removed successfully",
    });
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: "Failed to remove item",
    });
  }
};

const updateStatus = async (req, res) => {
  try {
    await ServiesItemModel.findByIdAndUpdate(req.body.orderId, {
      status: req.body.status,
    });
    res.json({ success: true, message: "Order status updated successfully" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error in updating order status" });
  }
};

export { addServies, ListServies, removeServies, updateStatus };
