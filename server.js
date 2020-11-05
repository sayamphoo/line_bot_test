const line = require("@line/bot-sdk");
const express = require("express");
const app = express();

const config = {
  channelAccessToken:
    "lWFvEUSumTvf812IKcfbXGFlR7TeW53w0FoA94lHsi9i0drxSHWBlPiZCFuC0q1G5p27j7J2P6VUOxq0isRCIa7x/xf78UZ1aTQh4cOiUwCajV54oadRr+J9z341Y+Iy1Gfompd1qApFmVjJlAgYjAdB04t89/1O/w1cDnyilFU=",
  channelSecret: "8d53e3fa12732a4134de5bf0e2f0a36a",
};

const client = new line.Client(config);

app.post("/webhook", line.middleware(config), (req, res) => {
    Promise
        .all(req.body.events.map(handleEvent))
        .then((result) => res.json(result)
  );
});

function handleEvent(event) {
  console.log('object _line'+JSON.stringify(event))
  console.log("111:" + event.type);
  console.log("222:" + event.message.type);
  
  if (event.type !== "message" || event.message.type !== "text") {
    return Promise.resolve(null);
  }
    
  return client.replyMessage(event.replyToken, {
    type: "text",
    text: "รักนะคร้าบบ",
  });
}

const port = process.env.PORT || 8888
app.listen(port, (req, res) => {
   console.log("Express is working on port " + port);
});