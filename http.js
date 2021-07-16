const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("<h1>Welcome to our home page</h1>");
  }
  if (req.url === "/about") {
    res.end("<h3>Here is our short history</h3>");
  }
  res.end(`<h1>Oops!!</h1>
    <P>We can't find the page your looking for</P>
    <a href="/">Back Home</a>`);
});

server.listen(5000);
