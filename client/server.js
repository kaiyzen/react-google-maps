var Path = require("path");
var http = require("http");

var finalhandler = require("finalhandler");
var serveStatic = require("serve-static");

var serve = serveStatic(Path.resolve(__dirname, "../public"));

http.createServer(function (request, response) {
//   if ("/server-render" === request.url) {
//     // React server render logic
//     var React = require("react");


//   } else {
    var done = finalhandler(request, response);
    serve(request, response, done);
  // }
}).listen(3000);
