const configCrear = {
    descripcion: {
        demand: true,
        alias: 'd'
    }
}

const configActualizar = {
    descripcion: {
        demand: true,
        alias: 'd'
    },
    completado: {
        alias: 'c',
        default: true
    }
}
const configListar = {
    listar: {
        alias: 'l'
    }
}
const configBorrar = {
    descripcion: {
        alias: 'd',
        demand: true
    }
}

module.exports = { configCrear, configActualizar, configListar, configBorrar }