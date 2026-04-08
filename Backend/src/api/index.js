const express = require("express");
const router = express.Router();

// ROUTER: /api/video-games
router.use("/video-games", require("./routes/videoGames"));

// ROUTER: /api/board-games
router.use("/board-games", require("./routes/boardGames"));

module.exports = router;