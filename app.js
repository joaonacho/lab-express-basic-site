const express = require("express");
const app = express();

let port = 4000;
app.listen(port);

app.use(express.static("public"));

app.get("/", (request, response, next) => {
  response.sendFile(__dirname + "/views/home.html");
});

app.get("/about", (request, response, next) => {
  response.sendFile(__dirname + "/views/about.html");
});

app.get("/photogallery", (request, response, next) => {
  response.sendFile(__dirname + "/views/photogallery.html");
});

app.get("/works", (request, response, next) => {
  response.sendFile(__dirname + "/views/works.html");
});
