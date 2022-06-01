const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");

// initialize app
const app = express();

// associate bodyParser middleware
app.use(bodyParser.json());

// store events
const events = [];

// set a handler
app.post("/events", (req, res) => {
  const event = req.body;
  events.push(event);
  console.log(event);

  axios.post("http://posts-clusterip-srv:4000/events", event).catch((err) => {
    console.log(err.message);
  });
  axios.post("http://comments-srv:4001/events", event).catch((err) => {
    console.log(err.message);
  });
  axios.post("http://query-srv:4002/events", event).catch((err) => {
    console.log(err.message);
  });
  axios.post("http://moderation-srv:4003/events", event).catch((err) => {
    console.log(err.message);
  });

  res.send({ status: "OK" });
});

app.get("/events", (req, res) => {
  res.send(events);
});

app.listen(4005, () => {
  console.log("Listening on 4005");
});
