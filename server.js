const line = require("@line/bot-sdk");
const express = require("express");
const co = require('./lineconfig/config')
const manager = require('./reply_message/manage')
const app = express();

const client = new line.Client(co.config);

app.post("/webhook", line.middleware(co.config), (req, res) => {
 
});


var server = app.listen(process.env.PORT || 3000, function () {
  var port = server.address().port;
  console.log("Express is working on port " + port);
});