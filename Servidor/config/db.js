const mongoose = require("mongoose");
require('dotenv').config({ path :'variables.env'})

const conectarDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://sadvasquez:Sam044321994@cluster1.4zvxfkz.mongodb.net/meanproductos');

        console.log ('BD Conectada');
    } catch (error) {
    
        
        console.log(error)
        process.exit(1);
        
    }

}

module.exports=conectarDB;