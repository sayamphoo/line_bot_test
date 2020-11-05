const line = require("@line/bot-sdk");
const express = require("express");
const config = require("./lineconfig/config");
const app = express();

const client = new line.Client(config.config);

app.post("/webhook", line.middleware(config), (req, res) => {
  Promise.all(req.body.events.map(handleEvent)).then((result) =>
    res.json(result)
  );
});

function handleEvent(event) {
  console.log("object _line" + JSON.stringify(event));
  console.log("111:" + event.type);
  console.log("222:" + event.message.type);

  if (event.type === "message") {
    if (event.message.type === "text") {
      replyMes(event);
    }
  } else {
    return Promise.resolve(null);
  }
}

let replyMes = (e) => {
  return client.replyMessage(event.replyToken, {
    type: "text",
    text: "รักนะคร้าบบ",
  });
};

const port = process.env.PORT || 8888;
app.listen(port, (req, res) => {
  console.log("Express is working on port " + port);
});
