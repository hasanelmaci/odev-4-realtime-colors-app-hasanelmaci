const app = require("express")();
const http = require("http").Server(app);
const io = require("socket.io")(http);

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

http.listen(3000, () => {
  console.log("listening on *:3000");
});
