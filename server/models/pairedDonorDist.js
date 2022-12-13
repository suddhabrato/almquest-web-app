const mongoose = require("mongoose");

const pairedSchema = new mongoose.Schema({
  donor_id: {
    type: mongoose.Schema.ObjectId,
    ref: "Donor",
    required: true,
  },
  distributor_id: {
    type: mongoose.Schema.ObjectId,
    ref: "Distributor",
    required: true,
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
});

const PairedDonorDist = mongoose.model("PairedDonorDist", pairedSchema);

module.exports = PairedDonorDist;
