import mongoose from "mongoose";

const serviesSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  items: {
    type: Array,
    required: true,
  },
  amount: {
    type: Number,
  },
  address: {
    type: Object,
    required: true,
  },
  status: {
    type: String,
    default: "Request send Successfully",
  },
  data: {
    type: Date,
    default: Date.now(),
  },
  payment: {
    type: Boolean,
    default: false,
  },
});

const serviesModel =
  mongoose.models.serviesorder || mongoose.model("serviesorder", serviesSchema);

export default serviesModel;
