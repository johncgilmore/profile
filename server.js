var http = require("http");
var onRequest = function(request, response){
  console.log(request.method + "request received at /");
  var bio =
  pageData = {}
  pageData.headline = "I'm building 10 things in 20 days to learn some stuff"
  pageData.listTitle = "Next Steps"
  pageData.bio = "I WANT A JOB, first, so email me at <a mailto:johncgilmore@gmail.com>johncgilmore@gmail.com</a>.</p><p>" +
  "My philosophy is 'Measure zero times and nail twice or more as necessary and stay away from knives/saws in general or at least for now. '" +
  "Which is to say: if I hammer something into " +
  "a wall, and I want it straight, I'd rather just put one hole through it, then back up, straighten it out, " +
  "and put a second hole into it. Doesn't work with glass but it does with stuff my kid draws at school. For other people it makes more sense to use a level. Also tape. </p><p> But I do " +
  "better when I'm pursuing A and B and C with close proximity in time as opposed to pursuing A <em>properly</em>. So I am trying to build 10 dumb projects " +
  "in 20 working days, or four weeks, whilst myself and my wife and my autistic 5 year old and his twin sister get ready for incoming child number 3 due in two weeks." +
  "</p><p>Project #1 is this little guy. He'll possibly evolve over time but I don't wanna commit to that. It's a node server that renders " +
  "this page and nothing else. Cool beans. It's on github at <a href='https://www.github.com/johncgilmore/profile'>johncgilmore/profile</a>."
  response.writeHead(200, {"Content-Type": "text/html"})
  // html in line for now
  response.write("<html><head><script src='jquery-3.2.1.min.js'></script></head>")
  //body has a title, bio, and a list of next steps
  response.write("<body><h1>" + pageData.headline + "</h1>");

  response.write("<h2>" + pageData.listTitle + "</h2><ul>");
  response.write("<li>send file instead of html text</li><li>get dependencies into package.json</li>");
  response.write("<form action='/next' method='POST' style='background-color:#99ffff'>");
  response.write("<input id='next-step' type='text' name='next-step'</ >");
  response.write("<input type='submit' name='submit' value='make this form submit actually work' style='background-color:#ffff99'</ ></form>");
  response.write("</ul>");
  response.write("<h2>about MEEEE</h2>");
  response.write("<p>" + pageData.bio + "</p>");
  response.write("</body>");
  response.write("</html>");
  response.end();
};


var PORT = 8888
http.createServer(onRequest).listen(PORT);
console.log("listening at port " + PORT);
