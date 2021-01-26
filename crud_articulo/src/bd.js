const mongoose = require('mongoose');
 

mongoose.connect(`mongodb://localhost/carrito`, {

    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(db => console.log('conectado a MONGO'))
    .catch(error => console.log('no se pudo conectar'));