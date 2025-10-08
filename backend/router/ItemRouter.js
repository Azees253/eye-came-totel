import express from "express";
import {
  addItems,
  listItems,
  removeItem,
} from "../controller/ItemController.js";
import multer from "multer";

const ItemRouter = express.Router();

const storage = multer.diskStorage({
  destination: "uploads",
  filename: (req, file, cb) => {
    return cb(null, `${Date.now()}${file.originalname}`);
  },
});

const upload = multer({
  storage: storage,
});

ItemRouter.post("/add", upload.single("image"), addItems);
ItemRouter.get("/list", listItems);
ItemRouter.post("/remove", removeItem);

export default ItemRouter;
