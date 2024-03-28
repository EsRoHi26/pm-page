const mongoose = require('mongoose');
const esquemaTarea = mongoose.Schema({
    nombre:{
        type: String,
        required: true
    },
    descripcion:{
        type: String,
        required: true
    },
    correoEncargado:{
        type: String,
        required: true
    },
    puntos:{
        type: Number,
        required: true
    },
    estado:{
        type: String,
        required: true
    },
    proyecto:{
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Tarea', esquemaTarea);
