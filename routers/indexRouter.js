const { Router } = require("express");
const indexRouter = Router();

const {
  showInventory,
  createGameGet,
  createGamePost,
  createCategoryGet,
  createCategoryPost,
  createDeveloperGet,
  createDeveloperPost,
} = require("../controllers/inventoryController");

indexRouter.get("/", showInventory);

indexRouter.get("/createItem", createGameGet);
indexRouter.post("/createItem", createGamePost);

indexRouter.get("/createCategory", createCategoryGet);
indexRouter.post("/createCategory", createCategoryPost);

indexRouter.get("/createDeveloper", createDeveloperGet);
indexRouter.post("/createDeveloper", createDeveloperPost);

module.exports = indexRouter;
