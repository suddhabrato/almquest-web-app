const AppError = require("../utils/appError");
const asyncHandler = require("express-async-handler");
const Donor = require("../models/donorModel");

exports.register = asyncHandler(async (req, res, next) => {
  res.status(200).json({
    status: "success",
  });
});
