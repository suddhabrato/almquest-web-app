const mongoose = require("mongoose");
const axios = require("axios");

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
  message: String,
  packageId: {
    type: mongoose.Schema.ObjectId,
    ref: "DonatedPackages",
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

Notification.watch().on("change", async (data) => {
  await axios.post(
    "https://almquest-pyserver.onrender.com/api/notifyUpdate",
    data.fullDocument
  );
});

module.exports = Notification;
