const express = require("express");
const router = express.Router();

const {
  getAllBoardGamesHandler,
  getBoardGameByIdHandler,
  createBoardGameHandler,
  updateBoardGameHandler,
  deleteBoardGameHandler,
} = require("../controllers/boardGameController");

// GET - /api/board-games
router.get("/", getAllBoardGamesHandler);

// GET - /api/board-games/:id
router.get("/:id", getBoardGameByIdHandler);

// POST - /api/board-games
router.post("/", createBoardGameHandler);

// PUT - /api/board-games/:id
router.put("/:id", updateBoardGameHandler);

// DELETE - /api/board-games/:id
router.delete("/:id", deleteBoardGameHandler);

module.exports = router;