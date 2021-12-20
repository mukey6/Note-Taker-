const express = require("express");
const db = require("./db/db.json");
const fs = require("fs");
const path = require("path");
const htmlRoutes = require('./routes/htmlRoutes/htmlRouter')
const indexRouter = require('./routes/apiRoutes/indexRouter')



const app = express();
// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));

app.use(express.json())
app.use(express.static('public'))
app.use("/api", indexRouter)
app.use("/", htmlRoutes)


function createNewNote(notes) {
    fs.writeFileSync(
      path.join(__dirname, "./db/db.json"),
      JSON.stringify({ notes }, null, 2)
    );
    return notes;
  }
  

  app.get("/api/notes", (req, res) => {
   res.json(req.body)
});
  app.post("/api/notes", (req, res) => {
      createNewNote(req.body)
    res.status(201).send(req.body);
  });


app.listen(3001, () => {
  console.log(`API server now on port 3001!`);
});
