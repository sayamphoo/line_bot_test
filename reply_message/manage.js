let objreply = {
  type: "text",
  text: "",
};

let check = function (message) {
  if (message === "สวัสดี") {
    return objreply;
  }
};

module.exports = {
  check,
};
