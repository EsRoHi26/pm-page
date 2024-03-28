const mongoose = require('mongoose');
const esquemaUsuario = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    cedula:{
        type: Number,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    contrasenna:{
        type: String,
        required: true
    },
    departamento:{
        type: String,
        required: true
    },
    telefono:{
        type: Number,
        required: true
    }, 
    proyecto:{
        type: Number,
        required: true
    }   
});

module.exports = mongoose.model('Usuario', esquemaUsuario);


