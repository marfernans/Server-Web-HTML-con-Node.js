var server = require('./server');
var enrutador = require('./enrutador');
var peticiones = require('./peticiones');

var manejador = {}
manejador['/'] = peticiones.inicio;
manejador['/pagina1'] = peticiones.pagina1;
manejador['/pagina2'] = peticiones.pagina2;
manejador['/favicon'] = peticiones.favicon;


server.iniciar(enrutador.enrutar, manejador);

