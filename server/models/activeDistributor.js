const mongoose = require("mongoose");

const activeSchema = new mongoose.Schema({
  distributor_id: {
    type: mongoose.Schema.ObjectId,
    ref: "Distributor",
    required: true,
  },
  availableCapacity: {
    type: Number,
    required: true,
  },
  travelCapacity: {
    type: Number,
    required: true,
  },
});

const ActiveDistributor = mongoose.model("ActiveDistributor", activeSchema);

module.exports = ActiveDistributor;
