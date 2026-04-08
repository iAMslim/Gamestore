const express = require("express");
const router = express.Router();

const {
  getAllVideoGamesHandler,
  getVideoGameByIdHandler,
  createVideoGameHandler,
  updateVideoGameHandler,
  deleteVideoGameHandler,
} = require("../controllers/videoGameController");

// GET - /api/video-games
router.get("/", getAllVideoGamesHandler);

// GET - /api/video-games/:id
router.get("/:id", getVideoGameByIdHandler);

// POST - /api/video-games
router.post("/", createVideoGameHandler);

// PUT - /api/video-games/:id
router.put("/:id", updateVideoGameHandler);

// DELETE - /api/video-games/:id
router.delete("/:id", deleteVideoGameHandler);

module.exports = router;