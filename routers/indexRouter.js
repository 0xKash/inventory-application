const { Router } = require("express");
const indexRouter = Router();

const {
  showInventory,
  createGameGet,
  createGamePost,
  createGenreGet,
  createGenrePost,
  createDeveloperGet,
  createDeveloperPost,
  searchGames,
} = require("../controllers/inventoryController");

indexRouter.get("/", showInventory);
indexRouter.post("/", searchGames);

indexRouter.get("/createGame", createGameGet);
indexRouter.post("/createGame", createGamePost);

indexRouter.get("/createGenre", createGenreGet);
indexRouter.post("/createGenre", createGenrePost);

indexRouter.get("/createDeveloper", createDeveloperGet);
indexRouter.post("/createDeveloper", createDeveloperPost);

module.exports = indexRouter;
