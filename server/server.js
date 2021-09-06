const express = require("express");
const cors = require("cors");
const http = require("http");
const upload = require("express-fileupload");

const app = express();
app.use(cors());
app.use(upload());

app.post("/dev/alumni", (req, res) => {
  console.log(JSON.parse(req.body.json));
  res.json("send");
});

const port = 5001;

app.set("port", port);
const httpServer = http.createServer(app);

let server = httpServer.listen(port, () => {
  console.log("Server running on port ", port);
});
