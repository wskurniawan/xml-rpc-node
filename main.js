var xmlrpc = require('xmlrpc')

// Creates an XML-RPC server to listen to XML-RPC method calls
var server = xmlrpc.createServer({ host: 'localhost', port: 9090 })
// Handle methods not found
server.on('NotFound', function (method, params) {
   console.log('Method ' + method + ' does not exist');
})

console.log('XML-RPC server listening on port 9091')

//listen event
server.on('tambah', function (err, params, callback) {
   console.log('Fungsi tambah dipanggil');
   console.log(params);
   callback(null, params[0] + params[1]);
});

server.on('kali', function (err, params, callback) {
   console.log('Fungsi kali dipanggil');
   console.log(params);
   callback(null, params[0] * params[1]);
});

server.on('bagi', function (err, params, callback) {
   console.log('Fungsi bagi dipanggil');
   console.log(params);

   callback(null, params[0] / params[1]);
});

server.on('kurang', function (err, params, callback) {
   console.log('Fungsi kurang dipanggil');
   console.log(params);

   callback(null, params[0] - params[1]);
});