const asyncHandler = require("express-async-handler");
const Distributor = require("../models/distributorModel");
const factory = require("./handlerFactory");

exports.register = asyncHandler(async (req, res, next) => {
  const doc = await Distributor.create(req.body);

  doc.availableCapacity = doc.maxCapacity;
  await doc.save();

  res.status(200).json({
    status: "success",
    data: doc,
  });
});

exports.delete = factory.deleteAccount(Distributor);
exports.update = factory.updateAccount(Distributor);
exports.getProfile = factory.myProfile(Distributor);
