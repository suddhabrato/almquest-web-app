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
  timestamp: Date,
  state: {
    type: String,
    enum: {
      values: ["Not Paired", "Paired", "Received", "Distributed"],
      message: "Not a valid state",
    },
    default: "Not Paired",
  },
  notif_seen: {
    type: Boolean,
    default: false,
  },
});

const Notification = mongoose.model("Notification", notifSchema);

Notification.watch().on("change", async (data) => {
  if (data.operationType == "insert") {
    try {
      await axios.post(
        "https://almquest-server.onrender.com/api/notifyUpdate",
        data.fullDocument,
        {
          headers: {
            "Accept-Encoding": "gzip,deflate,compress",
          },
        }
      );
    } catch (err) {
      console.log(err);
    }
  }
});

module.exports = Notification;
