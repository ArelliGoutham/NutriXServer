const express = require("express");

const { createUser, deleteUser } = require("../controllers/userController");
const { authenticate, authorize } = require("../utils/authentication");
const {
  updateUserProfileDetails,
  getUserProfileByUserId,
} = require("../controllers/userProfileController");

const router = express.Router();

// User routes
router.post("/", createUser);
router.delete(
  "/:id",
  authenticate,
  authorize(["admin", "superadmin"]),
  deleteUser
);

// User profile details routes
router.patch("/details", authenticate, updateUserProfileDetails);
router.get("/details", authenticate, getUserProfileByUserId);

module.exports = router;
