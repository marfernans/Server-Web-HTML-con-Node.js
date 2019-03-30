var server =  require('http');

function startServer(requiere, respuesta) {
    console.log('Se conectaron xD!');
    respuesta.writeHead(200,{'Content-Type':'text/html'});
    respuesta.write('<h1> El servidor funciona SUPER..! </h1>');
    respuesta.end();
}

server.createServer(startServer).listen(8080);
