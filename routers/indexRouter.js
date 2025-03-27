const { Router } = require("express");
const indexRouter = Router();

const {
  showInventory,
  createGameGet,
  createGamePost,
} = require("../controllers/inventoryController");

indexRouter.get("/", showInventory);

indexRouter.get("/create", createGameGet);
indexRouter.post("/create", createGamePost);

module.exports = indexRouter;
