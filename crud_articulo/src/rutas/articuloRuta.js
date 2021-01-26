const { Router } = require('express');
const ruta = Router();

const {
    mostrarFormulario,
    crearArticulo,
    listarArticulo,
    eliminarArticulo,
    mostarFormularioEditar,
    editar
} = require('../controlador/articuloControlador');



ruta.get('/formulario', mostrarFormulario);
ruta.post('/crear', crearArticulo);
ruta.get('/listar', listarArticulo);
ruta.delete('/eliminar/:id', eliminarArticulo);
ruta.get('/buscar/:id', mostarFormularioEditar);
ruta.put('/editar/:id', editar);
 

module.exports = ruta;

