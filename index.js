const line = require("@line/bot-sdk");
const express = require("express");
const app = express();

app.get('/', function (x, y) {
  y.send("000")
})

const port = process.env.port || 4000;
app.listen(port, () => {
  console.log("port = " + port);
});
