const mongoose = require('mongoose');
const esquemaProyecto = mongoose.Schema({
    nombre:{
        type: String,
        required: true,
        unique: true
    },
    recursosN:{
        type: String,
        required: true
    },
    presupuesto:{
        type: Number,
        required: true
    },
    correoColaboradores:{
        type: Array,
        required: true
    },
    
    estado:{
        type: String,
        required: true
    },
    descripcion:{
        type: String,
        required: true
    },
    fechaInicio:{
        type: Date,
        required: true
    },
    fechaFin:{
        type: Date, 
    },
    historialCambios:{
        type: Array,
        required: true
    },
    correoResponsable:{
        type: String,
        required: true
    },
    tareas: {
        type: Array,
        required: true,
        of: { // Define el tipo de objetos dentro del array
            nombre: {
            type: String,
            required: true
            },
            descripcion: {
            type: String,
            required: true
            },
            correoEncargado: {
            type: String,
            required: true
            },
            puntos: {
            type: Number,
            required: true
            },
            estado: {
            type: String,
            required: true
            }
        }
    }
});


module.exports = mongoose.model('Proyecto', esquemaProyecto);
