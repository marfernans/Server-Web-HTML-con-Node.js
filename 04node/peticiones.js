function inicio(respuesta) {
  console.log(" Entraste en la pagina de inicio");
  respuesta.writeHead(200,{'content-Type':'text/html'});
  respuesta.write("Esta es la pagita de Inicio");
  respuesta.end();


 
}
function pagina1(respuesta) {
  console.log("Entraste en la pagina numero 01");
  respuesta.writeHead(200,{'content-Type':'text/html'});
  respuesta.write("Esta es la pagita número 1");
  respuesta.end();
}
function pagina2(respuesta) {
  console.log("Entraste en la pagina numero 02");
  respuesta.writeHead(200,{'content-Type':'text/html'});
  respuesta.write("Esta es la pagita número 2");
  respuesta.end();
}
function favicon(respuesta) {
  console.log("Se a pedido el favicón");
  respuesta.writeHead(200,{'content-Type':'text/html'});
  respuesta.write("");
  respuesta.end();
}

exports.inicio = inicio;
exports.pagina1 = pagina1;
exports.pagina2 = pagina2;
exports.favicon = favicon;
