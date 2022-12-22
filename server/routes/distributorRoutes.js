const express = require("express");
const distributorController = require("../controllers/distributorController");

const router = express.Router();

router.post("/register", distributorController.register);
router.patch("/update/:id", distributorController.update);
router.delete("/delete/:id", distributorController.delete);

router.post("/toggle/:id", distributorController.toggleActivity);
router.post("/notifSeen", distributorController.notifSeen);

router.get("/:id", distributorController.getProfile);

module.exports = router;
