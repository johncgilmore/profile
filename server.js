var html = require("html");
var fs = require("fs");
  

html.createServer(onRequest).listen(8888);
