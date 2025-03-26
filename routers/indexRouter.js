const { Router } = require("express");
const indexRouter = Router();

const {
  showInventory,
  createItemGet,
  createItemPost,
} = require("../controllers/inventoryController");

indexRouter.get("/", showInventory);

indexRouter.get("/create", createItemGet);
indexRouter.post("/create", createItemPost);

module.exports = indexRouter;
