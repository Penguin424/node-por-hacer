const { argsv } = require('./config/yargs')
const colors = require('colors');
const porHacer = require('./por-hacer/por-hacer');

let comando = argsv._[0];

switch (comando) {
    case 'crear':
        let tarea = porHacer.crear(argsv.descripcion);
        console.log(tarea)
        break;
    case 'listar':
        porHacer.listarTareas();
        break;
    case 'actualizar':
        porHacer.actualizar(argsv.descripcion, argsv.completado);
        break;
    case 'borrar':
        porHacer.borrar(argsv.descripcion)
        break;
    default:
        console.log('Comando no reconocido')
        break;
}