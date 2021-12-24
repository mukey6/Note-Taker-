const express = require("express");
const db = require("./db/db.json");
const fs = require("fs");
const uuidv1 = require("uuidv1");
const path = require("path");
const htmlRoutes = require("./routes/htmlRoutes/htmlRouter");
const indexRouter = require("./routes/apiRoutes/indexRouter");

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.json());
app.use(express.static("public"));
app.use("/api", indexRouter);
app.use("/", htmlRoutes);

const newNote = [];

app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});
