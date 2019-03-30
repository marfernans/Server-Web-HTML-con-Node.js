var server = require('http');
var url = require('url');
var fs = require('fs');


function iniciar(enrutar, manejador){
  function startServer (requiere, respuesta){
    var ruta = url.parse(requiere.url).pathname;

    console.log("Se conectaron xD!");

    /*var contenido = enrutar(manejador,ruta, respuesta);*/
    var index = fs.readfileSync("www/+ ruta +.html");

    var registro = fs.createWriteStream('registro.txt',{'flags':'a'});
    registro.write(ruta + '\n')

  respuesta.writeHead(200, {"Content-Type": "text/html"});
    respuesta.write(index);
    respuesta.end();
  }
  server.createServer(startServer).listen(8080);
}
exports.iniciar = iniciar;