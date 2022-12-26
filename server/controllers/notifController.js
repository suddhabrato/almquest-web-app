const asyncHandler = require("express-async-handler");
const Donor = require("../models/donorModel");
const Distributor = require("../models/distributorModel");
const Notification = require("../models/notifModel");
const Pusher = require("pusher");

exports.receiveUpdate = asyncHandler(async (req, res, next) => {
  const { _id, user_id, user_type, message } = req.body;

  const pusher = new Pusher({
    appId: "1526157",
    key: "b369bdc486176cddddfd",
    secret: "0f1a3034f5561ec2c060",
    cluster: "ap2",
    useTLS: true,
  });
  const id = user_id.toString();

  if (user_type === "Donor") {
    const donor = await Donor.findById(id);

    while (donor.notifs.length >= 10) {
      donor.notifs.reverse();
      donor.notifs.pop();
      donor.notifs.reverse();
    }
    donor.notifs.push(_id);
    if (donor.notif_unseen < 10) {
      donor.notif_unseen = donor.notif_unseen + 1;
    }

    await donor.save();

    pusher.trigger("almquest-channel", `${id}`, {
      message: message,
      count: donor.notif_unseen,
    });
  } else {
    const distributor = await Distributor.findById(id);

    while (distributor.notifs.length >= 10) {
      distributor.notifs.reverse();
      distributor.notifs.pop();
      distributor.notifs.reverse();
    }
    distributor.notifs.push(_id);
    if (distributor.notif_unseen < 10) {
      distributor.notif_unseen = distributor.notif_unseen + 1;
    }

    await distributor.save();

    pusher.trigger("almquest-channel", `${id}`, {
      message: message,
      count: distributor.notif_unseen,
    });
  }

  res.status(200).json({
    status: "success",
  });
});

exports.notifSeen = asyncHandler(async (req, res, next) => {
  const id = req.params.id;

  const notif = await Notification.findById(id);
  notif.notif_seen = true;
  await notif.save();

  res.status(200).json({
    status: "success",
  });
});
