const express = require('express');
const esquemaUsuario = require('../modelosDatos/usuario');
const router = express.Router(); 


//autenticar usuario
router.post('/autenticacion', (req, res) => {
    const { email, contrasenna} = req.body;

    esquemaUsuario.findOne({ email }, (error,usuario) => {
        if (error) {
            res.status(500).send('Error al autentificar el usaurio',error);
        } else {
            if (!usuario) {
                res.status(500).send('El usuario no se ha encontrado');
            } else {
                if (usuario.contrasenna === contrasenna) {
                    res.json({mensaje: 'Usuario autenticado'});
                } else {
                    res.json({mensaje: 'Contraseña incorrecta'});
                }
            }
        }
    });
}); //seleccionamos el campo que queremos traer