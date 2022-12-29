const AppError = require("../utils/appError");
const Donor = require("../models/donorModel");
const Distributor = require("../models/distributorModel");
const asyncHandler = require("express-async-handler");
const DonatedPackages = require("../models/donatedPackages");

exports.register = (Model) =>
  asyncHandler(async (req, res, next) => {
    const doc = await Model.create(req.body);

    res.status(200).json({
      status: "success",
      data: doc,
    });
  });

exports.deleteAccount = (Model) =>
  asyncHandler(async (req, res, next) => {
    const id = req.params.id;
    const doc = await Model.findByIdAndDelete(id);

    if (!doc) {
      return next(new AppError("No document found for given ID", 404));
    }

    res.status(204).send();
  });

exports.updateAccount = (Model) =>
  asyncHandler(async (req, res, next) => {
    const id = req.params.id;
    const doc = await Model.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!doc) {
      return next(new AppError("No document found for given ID", 404));
    }

    res.status(200).json({
      status: "success",
      data: doc,
    });
  });

exports.myProfile = (Model) =>
  asyncHandler(async (req, res, next) => {
    const id = req.params.id;
    const doc = await Model.findById(id);

    if (!doc) {
      return next(new AppError("No document found for given ID", 404));
    }

    res.status(200).json({
      status: "success",
      data: doc,
    });
  });

exports.checkUserExist = asyncHandler(async (req, res, next) => {
  const { email } = req.body;

  const doc1 = await Donor.findOne({ email: email });
  const doc2 = await Distributor.findOne({ email: email });

  if (doc1 || doc2) {
    res.status(200).json({
      isRegistered: true,
      message: "User already exist",
      userType: doc1 ? "donor" : "distributor",
      id: doc1 ? doc1._id : doc2._id,
      name: doc1 ? doc1.name : doc2.name,
      picture: doc1 ? doc1.picture : doc2.picture,
    });
  } else {
    res.status(200).json({
      isRegistered: false,
      message: "User not registered",
    });
  }
});

exports.notifSeen = (Model) =>
  asyncHandler(async (req, res, next) => {
    const id = req.params.id;
    const user = await Model.findById(id);

    user.notif_unseen = 0;
    await user.save();

    res.status(200).json({
      status: "success",
    });
  });

exports.getNotifs = (Model) =>
  asyncHandler(async (req, res, next) => {
    const id = req.params.id;

    const doc = await Model.findById(id);
    const populated = await doc.populate({
      path: "notifs",
      select: "-__v",
    });

    const dupNotifs = populated.notifs;
    const uniqNotifs = [...new Set(dupNotifs)];

    res.status(200).json({
      status: "success",
      unseen_count: doc.notif_unseen,
      notifs: uniqNotifs,
    });
  });

exports.getPackages = (Model) =>
  asyncHandler(async (req, res, next) => {
    const id = req.params.id;

    const doc = await Model.findById(id);
    const populated = await doc.populate({
      path: "packages",
      select: "-__v",
    });

    const dupPackages = populated.packages;
    const uniqPackages = [...new Set(dupPackages)];

    res.status(200).json({
      status: "success",
      packages: uniqPackages,
    });
  });

exports.getPackageById = asyncHandler(async (req, res, next) => {
  const id = req.params.id;
  const doc = await DonatedPackages.findById(id);

  if (!doc) {
    return next(new AppError("Package no longer exist for given id.", 404));
  }

  res.status(200).json({
    status: "success",
    package: doc,
  });
});
