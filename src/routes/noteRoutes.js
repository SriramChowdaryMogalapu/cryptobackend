const express = require('express');
const {
  createNote,
  deleteNote,
  getNoteById,
  getNotes,
  updateNote,
} = require("../controllers/noteController.js");
const { userAuth } = require("../middleware/authMiddleware.js");

const router = express.Router();

router.get("/", userAuth, getNotes);
router.post("/createNote", userAuth, createNote);
router.get("/:id", userAuth, getNoteById);
router.put("/updateNote/:id", userAuth, updateNote);
router.delete("/deleteNote/:id", userAuth, deleteNote);

module.exports = router;
