const mongoose = require("mongoose");

const donatedSchema = new mongoose.Schema({
  donor_id: {
    type: mongoose.Schema.ObjectId,
    ref: "Donor",
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  travelCapacity: {
    type: Number,
    required: true,
  },
  location: {
    type: {
      type: String,
      default: "Point",
      enum: ["Point"],
    },
    coordinates: [Number],
    address: String,
  },
  current_state: {
    type: String,
    enum: {
      values: ["Not Paired", "Paired", "Received", "Distributed"],
      message: "Not a valid state",
    },
    default: "Not Paired",
    required: true,
  },
  pair: {
    distributor_id: {
      type: mongoose.Schema.ObjectId,
      ref: "Distributor",
    },
    meet_location: {
      type: {
        type: String,
        default: "Point",
        enum: ["Point"],
      },
      coordinates: [Number],
      address: String,
    },
    donor_path: String,
    distributor_path: String,
  },
});

const DonatedPackages = mongoose.model("DonatedPackages", donatedSchema);

module.exports = DonatedPackages;
