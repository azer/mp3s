var findall = require("findall");
var request = require("request");

module.exports = mp3s;

function extract (input) {
  var abs = findall(input, /(https?\:\/\/.+\.mp3)(?:[^\w]|$)/g);
  return abs;
}

function mp3s (url, callback) {
  request(url, function (error, response, input) {
    if(error) return callback(error);

    callback(undefined, extract(input));
  });
}
