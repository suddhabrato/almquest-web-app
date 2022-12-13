const mongoose = require("mongoose");

const donatedSchema = new mongoose.Schema({
  donor_id: {
    type: mongoose.Schema.ObjectId,
    ref: "Donor",
    required: true,
  },
  quantity: {
    type: String,
    required: true,
  },
  travelCapacity: {
    type: Number,
    required: true,
  },
});

const DonatedPackages = mongoose.model("DonatedPackages", donatedSchema);

module.exports = DonatedPackages;
