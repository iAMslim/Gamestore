const { getGamesFromRAWG } = require("../../services/rawgService");
const formatGameData = require("../utils/formatGameData");

const {
  getAllVideoGames,
  getVideoGameById,
  createVideoGame,
  updateVideoGame,
  deleteVideoGame,
} = require("../../db/videoGames");

const getAllVideoGamesHandler = async (req, res, next) => {
  try {
    const search = req.query.search || "";
    const page = Number(req.query.page) || 1;
    const pageSize = Number(req.query.pageSize) || 20;

    const rawgData = await getGamesFromRAWG({ search, page, pageSize });
    const formattedGames = formatGameData(rawgData.results);

    res.status(200).send({
      results: formattedGames,
      count: rawgData.count,
      next: rawgData.next,
      previous: rawgData.previous,
      page,
      pageSize,
    });
  } catch (error) {
    next(error);
  }
};

const getVideoGameByIdHandler = async (req, res, next) => {
  try {
    const videoGame = await getVideoGameById(req.params.id);

    if (!videoGame) {
      return res.status(404).send({ error: "Video game not found" });
    }

    res.status(200).send(videoGame);
  } catch (error) {
    next(error);
  }
};

const createVideoGameHandler = async (req, res, next) => {
  try {
    const videoGame = await createVideoGame(req.body);
    res.status(201).send(videoGame);
  } catch (error) {
    next(error);
  }
};

const updateVideoGameHandler = async (req, res, next) => {
  try {
    const videoGame = await updateVideoGame(req.params.id, req.body);

    if (!videoGame) {
      return res.status(404).send({ error: "Video game not found" });
    }

    res.status(200).send(videoGame);
  } catch (error) {
    next(error);
  }
};

const deleteVideoGameHandler = async (req, res, next) => {
  try {
    const videoGame = await deleteVideoGame(req.params.id);

    if (!videoGame) {
      return res.status(404).send({ error: "Video game not found" });
    }

    res.status(200).send(videoGame);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllVideoGamesHandler,
  getVideoGameByIdHandler,
  createVideoGameHandler,
  updateVideoGameHandler,
  deleteVideoGameHandler,
};
