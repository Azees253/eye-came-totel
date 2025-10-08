import express from "express";
import {
  addToCart,
  getTotalAmount,
  removeToCart,
} from "../controller/AddqtyController.js";
import authMiddleware from "../middleware/auth.js";

const AddqtyRouter = express.Router();

AddqtyRouter.post("/add", authMiddleware, addToCart);
AddqtyRouter.post("/remove", authMiddleware, removeToCart);
AddqtyRouter.post("/total", authMiddleware, getTotalAmount);

export default AddqtyRouter;
