const asyncHandler = require("express-async-handler");
const Donor = require("../models/donorModel");
const axios = require("axios");
const DonatedPackages = require("../models/donatedPackages");
const factory = require("./handlerFactory");
const AppError = require("../utils/appError");

exports.registerDonor = factory.register(Donor);
exports.deleteDonor = factory.deleteAccount(Donor);
exports.updateDonor = factory.updateAccount(Donor);
exports.getDonor = factory.myProfile(Donor);
exports.notifSeen = factory.notifSeen(Donor);

exports.donatePackage = asyncHandler(async (req, res, next) => {
  const { donor_id } = req.body;

  const donor = await Donor.findById(donor_id);
  if (!donor) {
    return next(new AppError("Donor doesn't exist for given ID", 404));
  }

  const package = await DonatedPackages.create(req.body);

  const pid = package._id.toString();
  donor.packages.push(package._id);
  await donor.save();

  // Initiate PyScript
  try {
    axios.get(`https://almquest-pyserver.onrender.com/pair/${pid}`);
  } catch (err) {
    console.log(err);
  }

  res.status(200).json({
    status: "success",
  });
});
