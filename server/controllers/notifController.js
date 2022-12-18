const asyncHandler = require("express-async-handler");
const Notification = require("../models/notifModel");
const Donor = require("../models/donorModel");
const Distributor = require("../models/distributorModel");
const Pusher = require("pusher");

const pusher = new Pusher({
  appId: "1526157",
  key: "b369bdc486176cddddfd",
  secret: "0f1a3034f5561ec2c060",
  cluster: "ap2",
  useTLS: true,
});

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

  // Notif for donor
  await Notification.create({
    user_id: donor._id,
    user_type: "Donor",
    name: distributor.name,
    photo: distributor.picture,
    desc: " has been paired with you to collect your package.",
    timestamp: Date.now(),
    meet_location,
    path: donor_path,
  });

  // Notif for distributor
  await Notification.create({
    user_id: distributor._id,
    user_type: "Distributor",
    name: donor.name,
    photo: donor.picture,
    desc: "You've been paired with ",
    timestamp: Date.now(),
    meet_location,
    path: distributor_path,
  });

  donor.notif_unseen = donor.notif_unseen + 1;
  distributor.notif_unseen = distributor.notif_unseen + 1;
  await donor.save();
  await distributor.save();

  pusher.trigger("almquest-channel", `${donor._id}`, {
    message: "Distributor found.",
  });

  pusher.trigger("almquest-channel", `${distributor._id}`, {
    message: "You've been assigned a new package.",
  });

  res.status(200).json({
    status: "success",
  });
});
