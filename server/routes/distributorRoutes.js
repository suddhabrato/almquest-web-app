const express = require("express");
const distributorController = require("../controllers/distributorController");

const router = express.Router();

router.get("/:id", distributorController.getProfile);
router.post("/register", distributorController.register);
router.patch("/update/:id", distributorController.update);
router.delete("/delete/:id", distributorController.delete);

module.exports = router;
