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
});

const DonatedPackages = mongoose.model("DonatedPackages", donatedSchema);

module.exports = DonatedPackages;
