var http = require("http");
var onRequest = function(request, response){
  console.log(request.method + "request received at /");
  pageData = {}
  pageData.headline = "Hello World"
  pageData.listTitle = "Next Steps"
  response.writeHead(200, {"Content-Type": "text/html"})
  response.write("<html><head><script src='jquery-3.2.1.min.js'></script></head>")
  response.write("<body><h1>" + pageData.headline + "</h1><h2>" + pageData.listTitle + "</h2>");
  response.write("<ul>");
  response.write("<li>send file instead of html text</li><li>get dependencies into package.json</li>");
  response.write("<form action='/next' method='POST' style='background-color:#99ffff'>");
  response.write("<input id='next-step' type='text' name='next-step'</ >");
  response.write("<input type='submit' name='submit' value='add' style='background-color:#ffff99'</ ></form>");
  response.write("</ul>");
  response.write("</body>");
  response.write("</html>");
  response.end();
};


var PORT = 8888
http.createServer(onRequest).listen(PORT);
console.log("listening at port " + PORT);
