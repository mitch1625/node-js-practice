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

const http = require('http') // import http module

const routes = require('./routes')


const server = http.createServer(routes)

//  if modules exported as object:
//  const server = http.createServer(routes.handler)
//  console.log(routes.someText)



server.listen(5173) // multiple args you can pass in
// listen method will keep server running for incoming requests