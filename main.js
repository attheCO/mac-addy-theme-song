// var http = require("http");

// http.createServer(function (request, response) {

//    // Send the HTTP header 
//    // HTTP Status: 200 : OK
//    // Content Type: text/plain
//    response.writeHead(200, {'Content-Type': 'text/plain'});
   
//    // Send the response body as "Hello World"
//    response.end('Hello World\n');
// }).listen(8081);

// Console will print the message
// console.log('Server running at http://127.0.0.1:8081/');
// var nmap = require('libnmap')
//     , opts = {
//     timeout: 900, // 900s = 10m and increases the reliability of scan results
//     range: [
//         '10.10.1.0/24'
//     ]
// };

var nmap = require('libnmap')
  , opts = {
      range: ['10.10.1.0/24']
    };

nmap.scan(opts, function(err, report) {
  if (err) throw new Error(err);

  for (var item in report) {
    console.log(JSON.stringify(report[item]));
  }
});