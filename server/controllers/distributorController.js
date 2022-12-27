const asyncHandler = require("express-async-handler");
const Distributor = require("../models/distributorModel");
const Donor = require("../models/donorModel");
const ActiveDistributor = require("../models/activeDistributor");
const DonatedPackages = require("../models/donatedPackages");
const Notification = require("../models/notifModel");
const AppError = require("../utils/appError");
const factory = require("./handlerFactory");

exports.register = asyncHandler(async (req, res, next) => {
  const doc = await Distributor.create(req.body);

  doc.availableCapacity = doc.maxCapacity;
  await doc.save();

  await ActiveDistributor.create({
    distributor_id: doc._id,
  });

  res.status(200).json({
    status: "success",
    data: doc,
  });
});

exports.toggleActivity = asyncHandler(async (req, res, next) => {
  const id = req.params.id;

  const doc = await Distributor.findById(id);
  if (!doc) {
    return next(new AppError("No distributor found for given ID", 404));
  }

  if (doc.isActive) {
    doc.isActive = false;
    await ActiveDistributor.findOneAndDelete({ distributor_id: id });
  } else {
    doc.isActive = true;
    await ActiveDistributor.create({
      distributor_id: id,
    });
  }
  await doc.save();

  res.status(200).json({
    status: "success",
  });
});

exports.delete = factory.deleteAccount(Distributor);
exports.update = factory.updateAccount(Distributor);
exports.getProfile = factory.myProfile(Distributor);
exports.notifSeen = factory.notifSeen(Distributor);
exports.getNotifs = factory.getNotifs(Distributor);
exports.getPackages = factory.getPackages(Distributor);

exports.togglePackageState = asyncHandler(async (req, res, next) => {
  const { donor_id, distributor_id, packageId, state } = req.body;

  const donor = await Donor.findById(donor_id);
  const distributor = await Distributor.findById(distributor_id);

  const package = await DonatedPackages.findById(packageId);
  package.current_state = state;
  await package.save();

  if (state == "Distributed") {
    distributor.totalPackagesDistributed =
      distributor.totalPackagesDistributed + 1;
    await distributor.save();
  }

  await Notification.create({
    user_id: donor._id,
    user_type: "Donor",
    message: `Distributor has updated package state to ${state} state.`,
    packageId: packageId,
    name: distributor.name,
    photo: distributor.picture,
    timestamp: Date.now(),
    state: state,
  });

  res.status(200).json({
    status: "success",
  });
});
