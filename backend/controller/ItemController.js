import ItemModel from "../model/ItemModel.js";
import fs from "fs";

const addItems = async (req, res) => {
  let image_filename = `${req.file && req.file.filename}`;

  const item = new ItemModel({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    image: image_filename,
    category: req.body.category,
  });
  try {
    await item.save();
    res.json({
      success: true,
      message: "Item added successfully",
    });
  } catch (err) {
    console.log(err);
    res.json({
      success: false,
      message: "Failed to add item",
    });
  }
};

const listItems = async (req, res) => {
  try {
    const items = await ItemModel.find({});
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

const removeItem = async (req, res) => {
  try {
    const items = await ItemModel.findById(req.body.id);
    fs.unlink(`uploads/${items.image}`, () => {});
    await ItemModel.findByIdAndDelete(req.body.id);
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

export { addItems, listItems, removeItem };
