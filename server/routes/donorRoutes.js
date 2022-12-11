const express = require("express");
// const donorController = require("../controllers/donorController");
const authController = require("../controllers/authController");

const router = express.Router();

router.post("/register", authController.register);

module.exports = router;
