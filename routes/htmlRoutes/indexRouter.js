const path = require("path");
const router = require("express").Router();
const db = require("../../db/db.json");

router.get("/api/notes", (req, res) => {
  res.json(db);
});

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../../public/index.html"));
});

module.exports = router;
