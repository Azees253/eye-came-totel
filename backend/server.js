import express from "express";
import { connectDB } from "./config/dp.js";
import userRouter from "./router/userRouter.js";
import "dotenv/config";
import ItemRouter from "./router/ItemRouter.js";
import cors from "cors";
import ServiesItemRouter from "./router/ServiesItemRouter.js";
import AddqtyRouter from "./router/AddqtyRouter.js";
import orderRouter from "./router/OrderRouter.js";
import serviesRouter from "./router/ServiesRouter.js";
import serviesqtyRouter from "./router/serviesqtyRouter.js";

const app = express();
app.use(cors());

const port = process.env.PORT || 5000;

app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
app.use("/images/", express.static("uploads"));
app.use("/images/", express.static("serviesUploads"));

// Mongodb connection
connectDB();

app.use("/api/user", userRouter);
app.use("/api/item", ItemRouter);
app.use("/api/servies", ServiesItemRouter);
app.use("/api/cart", AddqtyRouter);
app.use("/api/serviescart", serviesqtyRouter);
app.use("/api/order", orderRouter);
app.use("/api/serviesorder", serviesRouter);

app.get("/", (req, res) => {
  res.send("API IS WORKING");
});

app.listen(port, () => {
  console.log(`Server is Running on http://localhost:${port}`);
});
