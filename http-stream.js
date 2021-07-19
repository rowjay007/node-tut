const http = require("http");
const fs = require("fs");

http
  .createServer((res, res) => {
    const fileStream = fs.createReadStream("./content/big.txt", "utf8");
    fileStream.on("open", () => {
      fileStream.pipe(res);
    });
    fileStream.on("error ", (err) => {
      res.end(err);
    });
  })
  .listen(5000);
