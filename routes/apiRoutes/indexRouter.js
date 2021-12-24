const path = require("path");
const router = require("express").Router();
let db = require("../../db/db.json");
const fs = require("fs");

router.get("/notes", (req, res) => {
  res.json(db);
});

router.get("/notes/:id", (req, res) => {
  // '+' turns req.params.id to #
  const noteId = +req.params.id;
  const foundNote = db.filter((note) => noteId === note.id);
  res.status(200).send(foundNote);
});

router.delete("/notes/:id", function (req, res) {
  const noteId = +req.params.id;
  const newDb = db.filter((note) => noteId !== note.id);
  db = newDb

  fs.writeFileSync(
    path.join(__dirname, "../../db/db.json"),
    JSON.stringify(db, null, 2)
  );
  res.status(202).send("DELETE request to homepage")
});

router.post("/notes", (req, res) => {
  db.push(req.body);
  db.forEach((item, i) => {
    item.id = i + 1;
  });

  fs.writeFileSync(
    path.join(__dirname, "../../db/db.json"),
    JSON.stringify(db, null, 2)
  );
  res.status(201).send(db);
});

module.exports = router;
