const mongoose = require("mongoose");
const validator = require("validator");

const distributorSchema = new mongoose.Schema({
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
  maxCapacity: {
    type: Number,
    required: true,
  },
  availableCapacity: {
    type: Number,
    default: 0,
  },
  totalPackagesDistributed: {
    type: Number,
    default: 0,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
});

const Distributor = mongoose.model("Distributor", distributorSchema);

module.exports = Distributor;
