const express = require('express');
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
require('dotenv').config();

// URL de la BD
const MONGODB_URI = 'mongodb+srv://reque:proyecto123@cluster0.2gxrrzt.mongodb.net/'

const app = express();
const port = process.env.PORT || 9000;

const rutasUsuario = require('./endpoints/usuarios');
const rutasProyecto = require('./endpoints/proyecto');
const rutasTarea = require('./endpoints/tarea');

// middlewares

app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

app.use(express.json()); // para que el servidor entienda json

app.use('/api', rutasUsuario ); // ruta para los usuarios

app.use('/api', rutasProyecto ); // ruta para los proyectos

app.use('/api', rutasTarea ); // ruta para las tareas

// rutas
app.get('/', (req, res) => {
    res.send('Bienvenidos');
});

// Conexión a la base de datos
mongoose.connect(MONGODB_URI).then(() => console.log('Base de datos conectada')).catch((error)=> console.log(error));

app.listen(port, () => console.log('Server is running', port));
