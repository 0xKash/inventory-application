require("dotenv").config();

const express = require("express");
const app = express();
const indexRouter = require("./routers/indexRouter");

app.use(express.urlencoded({ extended: true }));

app.use("/", indexRouter);

const PORT = 3000;
app.listen(PORT, () => console.log(`App started - Port: ${PORT}`));
