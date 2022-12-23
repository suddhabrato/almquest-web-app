const asyncHandler = require("express-async-handler");
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
  const { user_id, user_type, message } = req.body;

  const id = user_id.toString();
  if (user_type === "Donor") {
    const donor = await Donor.findById(user_id);
    donor.notif_unseen = donor.notif_unseen + 1;
    await donor.save();

    pusher.trigger("almquest-channel", `${id}`, {
      message: message,
      count: donor.notif_unseen,
    });
  } else {
    const distributor = await Distributor.findById(user_id);
    distributor.notif_unseen = distributor.notif_unseen + 1;
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
