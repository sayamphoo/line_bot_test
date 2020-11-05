let objreply = {
  type: "text",
  text: "ว่าไง",
};

let check = function (message) {
  if (message === "สวัสดี") {
    return objreply;
  }
};

module.exports = {
  check,
};
