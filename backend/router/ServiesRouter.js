import express from "express";
import authMiddleware from "../middleware/auth.js";
import {
  placerequest,
  requestlist,
  updateStatus,
  userrequest,
} from "../controller/serviesController.js";

const serviesRouter = express.Router();

serviesRouter.post("/place", authMiddleware, placerequest);
serviesRouter.post("/userrequest", authMiddleware, userrequest);
serviesRouter.get("/list", requestlist);
serviesRouter.post("/status", updateStatus);

export default serviesRouter;
