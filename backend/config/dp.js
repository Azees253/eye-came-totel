import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://mohamedazees61_db_user:14113380@cluster0.xap6nja.mongodb.net/Eye-came"
    )
    .then(() => {
      console.log("MongoDB connected successfully");
    });
};
