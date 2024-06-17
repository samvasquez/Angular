 const producto = require ('../models/Producto');

exports.crearProducto = (req, res) => {

    try {

        let productos ;

        productos = new producto


    } catch( error){
        console.log(error);
        res.status (500).send('ocurrio un error')
    }
}