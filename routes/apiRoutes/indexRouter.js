const path = require("path");
const router = require("express").Router();
const db = require("../../db/db.json");
const fs = require("fs");
const uuidv1 = require('uuidv1')


// function createNewNote( notes) {
//     fs.writeFileSync(
//       path.join(__dirname, "../../db/db.json"),
//       JSON.stringify( notes, null, 2)
//     );
// // notes.push(db)

//     // notes.id = {id:uuidv1}
//     // console.log(notes.id = {id:uuidv1()})
//     // console.log(notes.id)

//     return notes;

//   }
  

  router.get("/notes", (req, res) => {
   res.json(db)
});

router.delete('/notes', function (req, res) {
    res.send('DELETE request to homepage')
  })

router.post("/notes", (req, res) => {
    console.log("POST request made to /api/notes")
    console.log(req.body)

    // read-and-save the current contents of db.json
    fs.readFile(path.join(__dirname, "../../db/db.json"), "utf-8", (err, string)=>{
      if(err){console.error(err)}
      var savedArray = JSON.parse(string)

      console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")
      console.log("current contents of db.json")
      console.log(savedArray)

      //add a new note into savedArray
      // pushing from savedArray into db.json or vice versa?
savedArray.push(req.body)
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~')

      //new array into db.json
      // should i pass savedArray or json in the function?
      fs.writeFileSync(
        path.join(__dirname, "../../db/db.json"),
        JSON.stringify( savedArray, null, 2),
        savedArray.id = {id:uuidv1()},
        console.log(savedArray.id)
      );

      res.status(201).send(savedArray);
    })
  });


module.exports = router;


// router.get("/notes", (req, res) => {
//     let notes = db
//     res.json(notes)
// });

// router.post("/notes", (req, res) => {
//     createNewNote(req.body)
//     // saveNote(req.body) 
//     // console.log(saveNote)
//     res.status(201).send(req.body);
//     console.log('req' , req.body)

//   });
