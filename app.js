const http = require('http') // import http module
const fs = require('fs');
const { parse } = require('path');

// createSever has a RequestListener argument that is a function that executes at every incoming request
// RequestListener requires two args : request and response 
// function rqListener(req, res) {
// }

// rqListener will now execute on every request that is sent to the server
// http.createServer(rqListener);


//Can also pass in annonymous functions
// http.createServer(function(req,res) {
// });

// can use arrow syntax
// assign server to a variable access it

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method
  if (url === '/') {
    res.write('<html>');
    res.write('<head><title><>Enter Message</title></head>')
    res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>')
    res.write('</html>')
    return res.end()
  }
  if (url === '/message' && method === 'POST') {
    const body = []
    req.on('data', (chunk) => {
      console.log(chunk)
      body.push(chunk)
    });
    req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString();
      console.log(parsedBody)
      const message = parsedBody.split('=')[1]
      fs.writeFileSync('message.txt', message)
    })

    res.statusCode = 302;
    res.setHeader('Location', '/')
    return res.end()
  }

  res.setHeader('Content-Type', 'text/html')
  res.write('<html>');
  res.write('<head><title><>my first page</title></head>')
  res.write('<body><h1>hello my first Node.js server</h1></body>')
  res.write('</html>')
  res.end()
})

server.listen(5173) // multiple args you can pass in
// listen method will keep server running for incoming requests