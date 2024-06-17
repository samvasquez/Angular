const express=require('express');
const conectarDB =require('./config/db');

const app =express();

conectarDB();

app.use( express.json());

app.use('/api/productos',require ('./routes/productos'))

app.get('/',(req,res) => {
    res.send('Hola!!');
})

app.listen(4000,() => {
    console.log('servidor activo')
})