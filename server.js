var express = require("express");
var path = require("path");

var app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

let reservation = [{
  name: "Jason",
  number: "867-890-8765",
  id: 85
}];
let waitlist = [];

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/reserve", function (req, res) {
  res.sendFile(path.join(__dirname, "reserve.html"));
});
app.get("/tables", function (req, res) {
  res.sendFile(path.join(__dirname, "tables.html"));
});

app.get("/api/tables", function (req, res) {

  return res.json(reservation);
});
app.get("/api/waitlist", function (req, res) {
  return res.json(waitlist);
});

app.get("/api/reserve/:reservation", function (req, res) {
  var booked = req.params.reservation;

  console.log(booked);

  if (booked > 5) {
    alert("You're on the waitlist!");
  }
}
)


app.post("/api/reserve", function (req, res) {
  var newReservation = req.body;
  console.log(reservation);
  newReservation.id = newReservation.name;
  reservation.push(newReservation);

  res.json(newReservation);

});




app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});