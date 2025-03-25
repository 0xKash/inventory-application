const { Router } = require("express");
const indexRouter = Router();

const { showInventory } = require("../controllers/inventoryController");

indexRouter.get("/", showInventory);

module.exports = indexRouter;
