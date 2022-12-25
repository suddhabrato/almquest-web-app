const mongoose = require("mongoose");

const donatedSchema = new mongoose.Schema({
  donor_id: {
    type: mongoose.Schema.ObjectId,
    ref: "Donor",
    required: true,
  },
  donor_name: String,
  donor_phone: String,
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
  timestamp: Date,
  pair: {
    distributor_id: {
      type: mongoose.Schema.ObjectId,
      ref: "Distributor",
    },
    distributor_name: String,
    distributor_phone: String,
    distributor_location: {
      type: {
        type: String,
        default: "Point",
        enum: ["Point"],
      },
      coordinates: [Number],
      address: String,
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
