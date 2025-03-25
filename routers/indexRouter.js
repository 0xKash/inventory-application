const { Router } = require("express");
const indexRouter = Router();

indexRouter.get("/", (req, res) => console.log("Ok"));

module.exports = indexRouter;
