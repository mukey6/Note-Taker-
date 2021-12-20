const path = require("path");
const router = require("express").Router();
const db = require('../../db/db.json')

// this routher will display notes page, will get prefix from server.js
// /localhost:3001/notes

router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../../public/index.html"));
  });
  
router.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "../../public/notes.html"));
});

module.exports = router;

