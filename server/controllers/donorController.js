const Donor = require("../models/donorModel");
const factory = require("./handlerFactory");

exports.registerDonor = factory.register(Donor);
exports.deleteDonor = factory.deleteAccount(Donor);
exports.updateDonor = factory.updateAccount(Donor);
exports.getDonor = factory.myProfile(Donor);
