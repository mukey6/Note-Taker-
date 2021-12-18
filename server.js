const express = require("express");
const db = require("./db/db.json");
const fs = require("fs");
const path = require("path");
const notesRouter = require('./routes/htmlRoutes/notesRouter')
const indexRouter = require('./routes/htmlRoutes/indexRouter')



const app = express();

app.use(express.json())
app.use(express.static('public'))
app.use("/notes", notesRouter)
app.use("/", indexRouter)


function createNewNote(notes) {
    fs.writeFileSync(
      path.join(__dirname, "./db/db.json"),
      JSON.stringify({ notes }, null, 2)
    );
    return notes;
  }
  
  app.post("/api/notes", (req, res) => {
      createNewNote(req.body)
    res.status(201).send(req.body);
  });


app.listen(3001, () => {
  console.log(`API server now on port 3001!`);
});
