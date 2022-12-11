const mongoose = require("mongoose");
const validator = require("validator");

const donorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  donorType: {
    type: String,
    enum: {
      values: ["Organisation", "Individual", "Food Chain"],
      message: "Not a valid role",
    },
    default: "Individual",
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
  distanceRange: {
    type: Number,
    min: 0,
    default: 2,
    required: true,
  },
  lifetimeDonation: Number,
});

const Donor = mongoose.model("Donor", donorSchema);

module.exports = Donor;
