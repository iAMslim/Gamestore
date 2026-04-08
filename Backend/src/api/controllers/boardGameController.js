const {
  getAllBoardGames,
  getBoardGameById,
  createBoardGame,
  updateBoardGame,
  deleteBoardGame,
} = require("../../db/boardGames");

const getAllBoardGamesHandler = async (req, res, next) => {
  try {
    const boardGames = await getAllBoardGames();
    res.status(200).send(boardGames);
  } catch (error) {
    next(error);
  }
};

const getBoardGameByIdHandler = async (req, res, next) => {
  try {
    const boardGame = await getBoardGameById(req.params.id);

    if (!boardGame) {
      return res.status(404).send({ error: "Board game not found" });
    }

    res.status(200).send(boardGame);
  } catch (error) {
    next(error);
  }
};

const createBoardGameHandler = async (req, res, next) => {
  try {
    const boardGame = await createBoardGame(req.body);
    res.status(201).send(boardGame);
  } catch (error) {
    next(error);
  }
};

const updateBoardGameHandler = async (req, res, next) => {
  try {
    const boardGame = await updateBoardGame(req.params.id, req.body);

    if (!boardGame) {
      return res.status(404).send({ error: "Board game not found" });
    }

    res.status(200).send(boardGame);
  } catch (error) {
    next(error);
  }
};

const deleteBoardGameHandler = async (req, res, next) => {
  try {
    const boardGame = await deleteBoardGame(req.params.id);

    if (!boardGame) {
      return res.status(404).send({ error: "Board game not found" });
    }

    res.status(200).send(boardGame);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllBoardGamesHandler,
  getBoardGameByIdHandler,
  createBoardGameHandler,
  updateBoardGameHandler,
  deleteBoardGameHandler,
};