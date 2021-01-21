const app = require("express")();
const http = require("http").Server(app);
const io = require("socket.io")(http);

const port = process.env.PORT || 3000

app.get("/", (req, res) => {
  res.end("Realtime-Color-App!");
});

io.on("connection", (socket) => {
  console.log("an user connected!");

  socket.on("send-color", (color) => {
    console.log(color);
    socket.broadcast.emit("receive-color", color);
    socket.emit("receive-color", color);
  });

  socket.on("disconnect", () => console.log("an user disconnected"));
});

http.listen(port, () => {
  console.log("listening on *:3000");
});
