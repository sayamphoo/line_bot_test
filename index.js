const line = require("@line/bot-sdk");
const express = require("express");
const app = express();

const config = {
  channelAccessToken:
    "lWFvEUSumTvf812IKcfbXGFlR7TeW53w0FoA94lHsi9i0drxSHWBlPiZCFuC0q1G5p27j7J2P6VUOxq0isRCIa7x/xf78UZ1aTQh4cOiUwCajV54oadRr+J9z341Y+Iy1Gfompd1qApFmVjJlAgYjAdB04t89/1O/w1cDnyilFU=",
  channelSecret: "8d53e3fa12732a4134de5bf0e2f0a36a",
};

const client = new line.Client(config);

app.get('/', function (x, y) {
  y.send("000")
})

app.post("/webhook", line.middleware(config), (req, res) => {
    Promise
        .all(req.body.events.map(handleEvent))
        .then((result) => res.json(result)
  );

  
});

function handleEvent(event) {
  if (event.type !== "message" || event.message.type !== "text") {
    return Promise.resolve(null);
    }
    
  return client.replyMessage(event.replyToken, {
    type: "text",
    text: event.message.text,
  });
}

const port = process.env.port || 4000;

app.listen(port, () => {
  console.log("port = " + port);
});
