const express = require("express");
const app = express();
const port = process.env.port || 4000;

app.get('/', function (x, y) {
  y.send("000")
})


app.listen(port, () => {
  console.log("port = " + port);
});
