const path = require("path");
const router = require("express").Router();
const db = require("../../db/db.json");


router.get("/notes", (req, res) => {
    let notes = db
    res.json(notes)
});

module.exports = router;
