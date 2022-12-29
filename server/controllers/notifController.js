const asyncHandler = require("express-async-handler");
const Donor = require("../models/donorModel");
const Distributor = require("../models/distributorModel");
const Notification = require("../models/notifModel");
const Pusher = require("pusher");

exports.receiveUpdate = asyncHandler(async (req, res, next) => {
  const { _id, user_id, user_type, message, photo } = req.body;

  const pusher = new Pusher({
    appId: "1531071",
    key: "e8e48f668ab490fa03e0",
    secret: "04bd7966f4a359b6e19b",
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

    if (donor.notif_unseen < 10) {
      donor.notif_unseen = donor.notif_unseen + 1;
    }

    donor.notifs.push(_id);
    await donor.save();

    pusher.trigger("almquest-channel", `${id}`, {
      message: message,
      photo: photo ?? "",
      count: donor.notif_unseen,
    });
  } else {
    const distributor = await Distributor.findById(id);

    while (distributor.notifs.length >= 10) {
      distributor.notifs.reverse();
      distributor.notifs.pop();
      distributor.notifs.reverse();
    }

    if (distributor.notif_unseen < 10) {
      distributor.notif_unseen = distributor.notif_unseen + 1;
    }

    distributor.notifs.push(_id);
    await distributor.save();

    pusher.trigger("almquest-channel", `${id}`, {
      message: message,
      photo: photo ?? "",
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
