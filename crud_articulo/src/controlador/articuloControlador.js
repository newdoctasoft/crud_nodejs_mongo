const articuloControlador = {};

const Articulo = require('../modelo/Articulo');

articuloControlador.mostrarFormulario = (req, res) => {
    res.render('articulo/formulario')
}

articuloControlador.crearArticulo = async (req, res) => {
    console.log(req.body);
    const { nombre, descripcion, material, categoria, precio, stock,imagen } = req.body;
    const nuevoArticulo = new Articulo({ nombre, descripcion, material, categoria, precio, stock,imagen });
    await nuevoArticulo.save();
    req.flash('mensaje_exito', 'Articulo insertado');
    res.redirect('/articulo/listar');
}



articuloControlador.listarArticulo = async (req, res) => {
    const articulos = await Articulo.find();
    res.render('articulo/listar', { articulos });
}


articuloControlador.eliminarArticulo = async (req, res) => {
    console.log('id', req.params.id)
    await Articulo.findByIdAndDelete(req.params.id);
    req.flash('mensaje_exito', 'Articulo ELIMINADA');
    res.redirect('/articulo/listar');
}

articuloControlador.mostarFormularioEditar = async (req, res) => {
    const articulo = await Articulo.findById(req.params.id);
    console.log(articulo);
    res.render('articulo/editar', { articulo: articulo });

}


articuloControlador.editar = async (req, res) => {
    console.log(req.body);
    const { nombre, descripcion, material, categoria, precio, stock ,imagen} = req.body;
    await Articulo.findByIdAndUpdate(req.params.id, { nombre, descripcion, material, categoria, precio, stock ,imagen});
    console.log(req.body);
    req.flash('mensaje_exito', 'ARTICULO EDITADO CORRECTAMENTE');
    res.redirect('/articulo/listar');
}


 

module.exports = articuloControlador;