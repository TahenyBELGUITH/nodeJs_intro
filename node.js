const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
  // Set the content type to HTML
  res.setHeader("Content-Type", "text/html");

  // Routing
  let filePath = "." + req.url;
  if (filePath === "./") {
    filePath = "./index.html";
  } else if (filePath === "./about") {
    filePath = "./about.html";
  } else if (filePath === "./contact-me") {
    filePath = "./contact-me.html";
  } else {
    filePath = "./404.html";
  }

  // Check if file exists
  fs.readFile(filePath, (err, data) => {
    if (err) {
      // If file not found, send a plain text error message
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.write("404 Not Found");
      res.end();
    } else {
      // If file found, serve the page
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    }
  });
});

// Start the server
server.listen(8080, () => {
  console.log("Server running on http://localhost:8080");
});
