var express = require("express");
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);


app.use(express.static("public"));

app.get("/", function (req, res) {
    res.redirect("public");
});

server.listen(3000, function () {
    console.log("Example is running on port 3000");
});
global.creature = require("./global/creature.js");
global.grass = require("./global/grass.js");
global.eatgrass = require("./global/eatgrass.js");
global.predator = require("./global/predator.js");
global.rain = require("./global/rain.js");

setInterval(function draw() {
    background("#acacac");


    for (var i in global.grassArr) {
        global.grassArr[i].mul();
    }

    for (var i in global.xotakerArr) {
        global.xotakerArr[i].bazmanal();
        global.xotakerArr[i].utel();
        global.xotakerArr[i].mahanal();
    }


    for (var i in global.gishatichArr) {
        global.gishatichArr[i].bazmanal();
        global.gishatichArr[i].utel();
        global.gishatichArr[i].mahanal();
    }
    for (var i in global.AnjrevArr) {
        global.AnjrevArr[i].bazmanal();
        global.AnjrevArr[i].utel();
        global.AnjrevArr[i].mahanal();
    }

},1000)
////////////////

app.use(express.static("."));
app.get('/', function (req, res) {
  res.redirect('index.html');
});
server.listen(3000);

io.on('connection', function (socket) {
  for (var i in matrix) {
    io.sockets.emit("staci kordinatnnery", matrix[i]);
  }
  socket.on("nor kordinater", function (data) {
    matrix.push(data);
    io.sockets.emit("staci kordinatnnery", data);
  })
});