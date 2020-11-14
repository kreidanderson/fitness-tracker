const express = require("express");
const mongoose = require("mongoose");
require('dotenv').config();

const PORT = process.env.PORT || 3000

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost/workouts',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    }
  );


app.use(require("./routes/api-routes.js"));
// app.use(require("./routes/html-routes.js"));

app.get("/exercise", (req, res) => {
  res.sendFile('./public/exercise.html', {root: __dirname});
});

app.get("/stats", (req, res) => {
  res.sendFile('./public/stats.html', {root: __dirname});
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});



