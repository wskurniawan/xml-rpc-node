var xmlrpc = require('xmlrpc')

// Creates an XML-RPC server to listen to XML-RPC method calls
var server = xmlrpc.createServer({ host: 'localhost', port: 9090 })
// Handle methods not found
server.on('NotFound', function (method, params) {
   console.log('Method ' + method + ' does not exist');
})
// Handle method calls by listening for events with the method call name
server.on('anAction', function (err, params, callback) {
   console.log('Method call params for \'anAction\': ' + params)

   // ...perform an action...

   // Send a method response with a value
   callback(null, 'aResult')
})
console.log('XML-RPC server listening on port 9091')

//listen event
server.on('tambah', function (err, params, callback) {
   console.log(params);
   callback(null, params[0] + params[1]);
});

server.on('kali', function (err, params, callback) {
   console.log(params);
   callback(null, params[0] * params[1]);
});

server.on('bagi', function (err, params, callback) {
   console.log(params);

   callback(null, params[0] / params[1]);
});

// Waits briefly to give the XML-RPC server time to start up and start
// listening
setTimeout(function () {
   // Creates an XML-RPC client. Passes the host information on where to
   // make the XML-RPC calls.
   var client = xmlrpc.createClient({ host: 'localhost', port: 9090, path: '/' })

   client.methodCall('tambah', [20, 22], function (error, value) {
      console.log('hasil tambah: ', value);
   });

   client.methodCall('kali', [20, 22], function (error, value) {
      console.log('hasil kali: ', value);
   });

   client.methodCall('bagi', [20, 0], function (error, value) {
      console.log('hasil bagi: ', value);
   });

}, 1000);