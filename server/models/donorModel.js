const mongoose = require("mongoose");
const validator = require("validator");

const donorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  picture: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
    required: true,
    validate: [validator.isEmail, "Please provide a valid email"],
  },
  phone: {
    type: String,
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
  lifetimeDonation: {
    type: Number,
    default: 0,
  },
  notif_unseen: {
    type: Number,
    default: 0,
  },
});

const Donor = mongoose.model("Donor", donorSchema);

module.exports = Donor;
