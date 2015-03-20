var Path = require("path");
var http = require("http");

var finalhandler = require("finalhandler");
var serveStatic = require("serve-static");

var serve = serveStatic(Path.resolve(__dirname, "./public"));

http.createServer(function (request, response) {
  if ("/" === request.url) {
    // React server render logic
    var React = require("react");
    var server = require("./server-bundle");

    var html = React.renderToString(server());

    response.setHeader("Content-Type", "text/html");
    response.end(html);

  } else {
    var done = finalhandler(request, response);
    serve(request, response, done);
  }
}).listen(3000);
