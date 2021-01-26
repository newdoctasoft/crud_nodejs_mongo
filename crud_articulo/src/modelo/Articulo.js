const { Schema, model } = require("mongoose");

const bcrypt = require("bcryptjs");

const ArticuloSchema = new Schema({
    nombre: { type: String, required: true },
    descripcion: { type: String, required: true },
    material: { type: String, required: true },
    categoria: { type: String, required: true }, 
    precio: { type: Number, required: true },
    stock: { type: Number, required: true },
    imagen: { type: String, required: true }
    

},
    {
        timestamps: true
    });

 

module.exports = model("Articulo", ArticuloSchema);
