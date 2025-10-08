import express from "express";
import {
  addServies,
  ListServies,
  removeServies,
} from "../controller/ServiesItemController.js";
import multer from "multer";

const ServiesItemRouter = express.Router();

const storage = multer.diskStorage({
  destination: "serviesUploads",
  filename: (req, file, cb) => {
    return cb(null, `${Date.now()}${file.originalname}`);
  },
});

const serviesUploads = multer({
  storage: storage,
});

ServiesItemRouter.post("/add", serviesUploads.single("image"), addServies);
ServiesItemRouter.get("/list", ListServies);
ServiesItemRouter.post("/remove", removeServies);

export default ServiesItemRouter;
