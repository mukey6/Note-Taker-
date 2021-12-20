const path = require("path");
const router = require("express").Router();
const db = require("../../db/db.json");
const fs = require("fs");


function createNewNote( notes) {
    console.log('notes top' ,notes)
    fs.writeFileSync(
      path.join(__dirname, "../../db/db.json"),
      JSON.stringify( notes, null, 2)
    );
notes.push(db)

    console.log('new notes' ,notes)

    // notes.id = {id:uuidv1}
    // console.log(notes.id = {id:uuidv1()})
    // console.log(notes.id)

    return notes;

  }
  

  router.get("/notes", (req, res) => {
   res.json(db)
});
  router.post("/notes", (req, res) => {
    createNewNote(req.body)
    // saveNote(req.body) 
    // console.log(saveNote)
    res.status(201).send(req.body);
    console.log('req' , req.body)

  });



module.exports = router;


// router.get("/notes", (req, res) => {
//     let notes = db
//     res.json(notes)
// });
