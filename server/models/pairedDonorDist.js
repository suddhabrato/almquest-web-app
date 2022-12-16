const mongoose = require("mongoose");
const axios = require("axios");

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
  donor_path: String,
  distributor_path: String,
});

const PairedDonorDist = mongoose.model("PairedDonorDist", pairedSchema);

PairedDonorDist.watch().on("change", async (data) => {
  const res = await axios.post(
    "http://localhost:3000/api/notifyUpdate",
    data.fullDocument
  );
  console.log(res.data);
});

module.exports = PairedDonorDist;
