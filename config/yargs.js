const { configActualizar, configCrear, configListar, configBorrar } = require('./config');

const argsv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', configCrear)
    .command('actualizar', 'Actualiza el estado completado de una tarea', configActualizar)
    .command('listar', 'Lista las tareas que se ecuntran en la db', configListar)
    .command('borrar', 'Borra una tarea de la lista de tareas', configBorrar)
    .help()
    .argv;


module.exports = { argsv }