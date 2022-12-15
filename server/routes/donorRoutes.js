const express = require("express");
const donorController = require("../controllers/donorController");

const router = express.Router();

router.get("/:id", donorController.getDonor);
router.post("/register", donorController.registerDonor);
router.patch("/update/:id", donorController.updateDonor);
router.delete("/delete/:id", donorController.deleteDonor);

router.post("/donate", donorController.donatePackage);

module.exports = router;
