const express = require("express");
const db = require("./db/db.json");
const fs = require("fs");
const uuidv1 = require('uuidv1')
const path = require("path");
const htmlRoutes = require('./routes/htmlRoutes/htmlRouter')
const indexRouter = require('./routes/apiRoutes/indexRouter')
console.log(uuidv1())
// import {saveNote} from './public/assets/js/index'

const app = express();
// parse incoming string or array data
// app.use(express.urlencoded({ extended: true }));

app.use(express.json())
app.use(express.static('public'))
app.use("/api", indexRouter)
app.use("/", htmlRoutes)

const newNote = []


app.listen(3001, () => {
  console.log(`API server now on port 3001!`);
});

// var notes = {id: <randomly generated Id using uuid>, note: req.body}
// app.post("/api/notes", (req, res) => {
//     let notes = {id:uuidv1(), note: req.body}
//     console.log(notes)
//    const newNote=  createNewNote(req.body)
// newNote.push(notes)
// console.log(newNote)
//   res.status(201).send(req.body);
// });

// having issue with "notes" being added at the top of the json file
// are we suppose to touch hte front end data that was given
