const asyncHandler = require("express-async-handler");
const { PythonShell } = require("python-shell");
const Donor = require("../models/donorModel");
const PairedDonorDist = require("../models/pairedDonorDist");
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

  let options = {
    scriptPath: "./pythonScript",
    args: [donor_id],
  };

  PythonShell.run("check.py", options, (err, result) => {
    if (err) {
      console.log(err);
    }
  });

  res.status(200).json({
    status: "success",
    package,
  });
});

exports.paired = asyncHandler(async (req, res, next) => {
  await PairedDonorDist.create({
    donor_id: "639975788771dc4fe06edffe",
    distributor_id: "639a34677e60e89a0341b671",
    meet_location: {
      coordinates: [24.3241, 88.2314],
      address: "94/2 C Road, Anandapuri, Barrackpore",
    },
    donor_path:
      "https://www.youtube.com/watch?v=L_1Iu6UBiLw&list=RDL_1Iu6UBiLw&start_radio=1",
    distributor_path:
      "https://www.youtube.com/watch?v=B0MBnDalSfY&list=RDB0MBnDalSfY&start_radio=1",
  });

  res.status(200).send();
});
