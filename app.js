const line = require("@line/bot-sdk");
const express = require("express");
const co = require('./lineconfig/config')
const manager = require('./reply_message/manage')
const app = express();

const client = new line.Client(co.config);

app.post("/webhook", line.middleware(config), (req, res) => {
  Promise.all(req.body.events.map(handleEvent)).then((result) =>
    res.json(result)
  );
});

function handleEvent(event) {
  if (event.type === "message") {
    if (event.message.type === "text") {
      replyMes(event, manager.check(event.message.text));
    }
  } else {
    return Promise.resolve(null);
  }
}

let replyMes = (e, obj) => {
  return client.replyMessage(e.replyToken, obj);
};
  

app.listen(process.env.PORT || 3000, function () {
  var port = server.address().port;
  console.log("Express is working on port " + port);
});