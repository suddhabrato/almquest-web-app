const asyncHandler = require("express-async-handler");
const Notification = require("../models/notifModel");
const Donor = require("../models/donorModel");
const Distributor = require("../models/distributorModel");
const Email = require("../utils/email");

exports.receiveUpdate = asyncHandler(async (req, res, next) => {
  const {
    donor_id,
    distributor_id,
    meet_location,
    donor_path,
    distributor_path,
  } = req.body;

  const donor = await Donor.findById(donor_id);
  const distributor = await Distributor.findById(distributor_id);

  const notifToDonor = await Notification.create({
    user_id: donor._id,
    user_type: "Donor",
    name: distributor.name,
    photo: distributor.picture,
    desc: " has been paired with you to collect your package.",
    timestamp: Date.now(),
    meet_location,
    path: donor_path,
  });

  const notifToDist = await Notification.create({
    user_id: distributor._id,
    user_type: "Distributor",
    name: donor.name,
    photo: donor.picture,
    desc: "You've been paired with ",
    timestamp: Date.now(),
    meet_location,
    path: distributor_path,
  });

  await new Email(donor, donor_path).mailToDonor(distributor.name);
  await new Email(distributor, distributor_path).mailToDistributor(donor.name);

  res.status(200).json({
    status: "success",
  });
});
