const asyncHandler = require("express-async-handler");
const { PythonShell } = require("python-shell");
const Donor = require("../models/donorModel");
const DonatedPackages = require("../models/donatedPackages");
const factory = require("./handlerFactory");
const AppError = require("../utils/appError");

exports.registerDonor = factory.register(Donor);
exports.deleteDonor = factory.deleteAccount(Donor);
exports.updateDonor = factory.updateAccount(Donor);
exports.getDonor = factory.myProfile(Donor);

exports.donatePackage = asyncHandler(async (req, res, next) => {
  const { donor_id } = req.body;

  const donor = await Donor.findById(donor_id);
  if (!donor) {
    return next(new AppError("Donor doesn't exist for given ID", 404));
  }

  const package = await DonatedPackages.create(req.body);

  let options = {
    scriptPath: "./pythonScript",
    args: [donor_id],
  };

  PythonShell.run("check.py", options, (err, result) => {
    if (err) {
      console.log(err);
      return next(new AppError(err.message, 500));
    }

    res.status(200).json({
      status: "success",
      result,
      package,
    });
  });
});
