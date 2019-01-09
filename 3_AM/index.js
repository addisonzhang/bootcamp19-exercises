const express = require("express");
const app = express();
app.use(express.static('public'));

// app.use(express.static(__dirname + "/View"));
// app.use(express.static(__dirname + "/Script"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/first", (req, res) => {
  res.sendFile(__dirname + '/first.html');
});

app.get("/movies", (req, res) => {
  res.sendFile(__dirname + '/movies.html');
});

app.get("/third", (req, res) => {
  res.sendFile(__dirname + '/third.html');
});

app.get("/fourth", (req, res) => {
  res.sendFile(__dirname + '/fourth.html');
});
// app.get('/first')

app.listen(3000);
console.log("Running at port 3000");
