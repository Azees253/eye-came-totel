import mongoose from "mongoose";

const ServiesItemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  servies: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    require: true,
  },

  category: {
    type: String,
    required: true,
  },
});

const ServiesItemModel =
  mongoose.models.Item || mongoose.model("servies", ServiesItemSchema);

export default ServiesItemModel;
