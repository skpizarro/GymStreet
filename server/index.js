const express = require('express');
const app = express();
const morgan = require('morgan');// para ver or consola lo que el usuario esta pidiendo

const {mongoose} = require('./database'); // solo requerimos la coneccion del archivo

//Settings
app.set('port',process.env.PORT || 3000)// creamos una variable para utilizarla desde cualquier parte de la aplicacion

//Middlewares, tdo loque pasa por el servidor ejecuta esta funcion
app.use(morgan('dev')); // usamos el metodo 
app.use(express.json()); //todos los datos que vengan del navegador se van a tomar como json

//Routes
app.use('/api/users',require('./routes/users.routes'));// use lo que voy a requerir de users.routes
app.use('/api/exercises',require('./routes/exercises.routes'));
app.use('/api/equipments',require('./routes/equipments.routes'));


//Start server
app.listen(app.get('port'),()=>{
    console.log('Server on port',app.get('port'));
});

