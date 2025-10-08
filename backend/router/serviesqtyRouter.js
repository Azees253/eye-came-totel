import express from "express";
import {
  addToServies,
  getTotalAmount,
  removeToServies,
} from "../controller/ServiesqtyController.js";
import authMiddleware from "../middleware/auth.js";

const serviesqtyRouter = express.Router();

serviesqtyRouter.post("/add", authMiddleware, addToServies);
serviesqtyRouter.post("/remove", authMiddleware, removeToServies);
serviesqtyRouter.post("/total", authMiddleware, getTotalAmount);

export default serviesqtyRouter;
