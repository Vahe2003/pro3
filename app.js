global.Creature = require("./global/creature.js")
global.Grass = require("./global/grass.js");
global.Xotaker = require("./global/eatgrass.js");
global.Gishatich = require("./global/predator.js");
global.Anjrev = require("./global/rain.js");

global.express = require("express");
global.app = express();
global.server = require('http').Server(app);
global.io = require('socket.io')(server);


app.use(express.static("public"));

app.get("/", function (req, res) {
    res.redirect("public");
});

server.listen(3000, function () {
    console.log("Example is running on port 3000");
});



setInterval(function draw() {
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
}, 1000)

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