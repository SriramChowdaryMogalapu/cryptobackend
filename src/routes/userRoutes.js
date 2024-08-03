const express = require('express');
const {
  updateUserProfile,
  userLogin,
  userSignUp,
} = require("../controllers/userController.js");
const { userAuth } = require("../middleware/authMiddleware.js");

const router = express.Router();

router.get("/test2", (req, res) => {
  res.send("Hello from Route");
});

router.post("/register", userSignUp);
router.post("/login", userLogin);
router.put("/profile", userAuth, updateUserProfile);

module.exports = router;