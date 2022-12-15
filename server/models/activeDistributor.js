const mongoose = require("mongoose");

const activeSchema = new mongoose.Schema({
  distributor_id: {
    type: mongoose.Schema.ObjectId,
    ref: "Distributor",
    required: true,
  },
});

const ActiveDistributor = mongoose.model("ActiveDistributor", activeSchema);

module.exports = ActiveDistributor;
