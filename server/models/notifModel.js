const mongoose = require("mongoose");

const notifSchema = new mongoose.Schema({
  user_id: mongoose.Schema.ObjectId,
  user_type: {
    type: String,
    enum: {
      values: ["Donor", "Distributor"],
      message: "Not a valid user type",
    },
    required: true,
  },
  name: String,
  photo: String,
  desc: String,
  timestamp: Date,
  meet_location: {
    type: {
      type: String,
      default: "Point",
      enum: ["Point"],
    },
    coordinates: [Number],
    address: String,
  },
  path: String,
});

const Notification = mongoose.model("Notification", notifSchema);

module.exports = Notification;
