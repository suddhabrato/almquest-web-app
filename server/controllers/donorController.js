const asyncHandler = require("express-async-handler");
const Donor = require("../models/donorModel");
const axios = require("axios");
const DonatedPackages = require("../models/donatedPackages");
const Notification = require("../models/notifModel");
const factory = require("./handlerFactory");
const AppError = require("../utils/appError");

exports.registerDonor = factory.register(Donor);
exports.deleteDonor = factory.deleteAccount(Donor);
exports.updateDonor = factory.updateAccount(Donor);
exports.getDonor = factory.myProfile(Donor);
exports.notifSeen = factory.notifSeen(Donor);
exports.getNotifs = factory.getNotifs(Donor);
exports.getPackages = factory.getPackages(Donor);

exports.deletePackage = asyncHandler(async (req, res, next) => {
  const { did, pid } = req.params;

  await DonatedPackages.findByIdAndDelete(pid);

  const donor = await Donor.findById(did);
  const notif = await Notification.findOne({ packageId: pid });

  donor.packages.remove(pid);
  donor.notifs.remove(notif._id.toString());
  donor.lifetimeDonation = donor.lifetimeDonation - 1;
  await donor.save();

  await Notification.findOneAndDelete({ packageId: pid });

  res.status(200).json({
    status: "success",
  });
});

exports.donatePackage = asyncHandler(async (req, res, next) => {
  const { donor_id } = req.body;

  const donor = await Donor.findById(donor_id);
  if (!donor) {
    return next(new AppError("Donor doesn't exist for given ID", 404));
  }

  const package = await DonatedPackages.create(req.body);

  const pid = package._id.toString();
  donor.packages.push(package._id);
  donor.lifetimeDonation = donor.lifetimeDonation + 1;

  await donor.save();

  // Initiate PyScript
  try {
    axios.get(`https://almquest-pyserver-f0v5.onrender.com/pair/${pid}`, {
      headers: {
        "Accept-Encoding": "gzip,deflate,compress",
      },
    });
  } catch (err) {
    console.log(err);
  }

  res.status(200).json({
    status: "success",
  });
});
