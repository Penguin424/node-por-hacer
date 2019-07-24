const fs = require('fs');
const color = require('colors');

let listadoPorHacer = [];

const guardarDB = () => {
    let data = JSON.stringify(listadoPorHacer);

    fs.writeFile(`db/data.json`, data, (err) => {
        if (err) throw new Error("Error al guardar el archivo", err);
        else return console.log('Arhivo creado perfectamente en la carpeta db y guardado en data.json');
    })
}

const cargarDb = () => {

    try {
        listadoPorHacer = require('../db/data.json');
    } catch (error) {
        listadoPorHacer = [];
    }

}

const crear = (descripcion) => {
    cargarDb();

    let porHacer = {
        descripcion,
        completado: false
    }

    listadoPorHacer.push(porHacer);

    guardarDB();

    return porHacer
}

let listarTareas = () => {
    listadoPorHacer = require('../db/data.json');

    for (let i of listadoPorHacer) {
        console.log('================='.green);
        console.log(i.descripcion);
        console.log(`Estado: ${i.completado}`.red);
        console.log('================='.green);



    }
}

let actualizar = (descripcion, completado) => {
    cargarDb();

    let index = listadoPorHacer.findIndex(listado => listado.descripcion === descripcion);

    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true;
    } else return false;
}

let borrar = (descripcion, completado) => {
    cargarDb();

    let index = listadoPorHacer.findIndex(listado => listado.descripcion === descripcion);

    if (index >= 0) {
        listadoPorHacer.splice(index, 1)
        guardarDB();
        return true;
    } else return false;
}



module.exports = { crear, listarTareas, actualizar, borrar }