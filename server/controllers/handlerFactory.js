const AppError = require("../utils/appError");
const asyncHandler = require("express-async-handler");

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
