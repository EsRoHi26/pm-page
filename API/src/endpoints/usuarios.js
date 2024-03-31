const express = require('express');
const esquemaUsuario = require('../modelosDatos/usuario');
const router = express.Router(); 

//crear usuario
router.post('/usuarios', (req, res) => {

    

    const usuario = esquemaUsuario(req.body);
    
    usuario.save()
    .then(() => res.json(usuario))
    .catch((error) => res.json(error));
});

//obtener los usuarios
router.get('/usuarios', (req, res) => {
    esquemaUsuario.find()
    .then((usuarios) => res.json(usuarios))
    .catch((error) => res.json(error));
});


//buscar usuario por id
router.get('/usuarios/:id', (req, res) => {
    const { id } = req.params;

    esquemaUsuario.findById(id)
    .then((usuarios) => res.json(usuarios))
    .catch((error) => res.json(error));

});

//actualizar un usuario
router.put('/usuarios/:id', (req, res) => {
    const { id } = req.params;

    const { email, departamento, telefono, proyecto } = req.body;

    esquemaUsuario.updateOne({_id: id}, { $set: {email, departamento, telefono, proyecto}})
        .then(()=>{res.json({mensaje: 'Usuario actualizado'})} )
        .catch((err)=> res.json(err));  
});

//eliminar un usuario
router.delete('/usuarios/:id', (req, res) => {
    const { id } = req.params;

    esquemaUsuario.remove({_id: id})
    .then(()=>{res.json({mensaje: 'Usuario eliminado'})} )
    .catch((err)=> res.json(err));  
});

//Autenticación de usuario
router.post('/autenticacion', (req, res) => {
    const { email, contrasenna} = req.body;
    
    esquemaUsuario.findOne({ email }).then(usuario => {
    if (!usuario) {
        return res.status(500).send('El usuario no se ha encontrado');
    }
    if (usuario.contrasenna === contrasenna) {
        return res.status(200).send('Usuario autenticado' );
    } else {
        return res.status(500).send('Contraseña incorrecta' );
    }
    })
    
});

router.put('/usuariosM', (req, res) => {
    

    const { emailM, email, departamento, telefono, proyecto } = req.body;

    esquemaUsuario.updateOne({email: emailM}, { $set: {email, departamento, telefono, proyecto}})
        .then(()=>{res.json({mensaje: 'Usuario actualizado'})} )
        .catch((err)=> res.json(err));  
});

router.post('/usuarios/email', (req, res) => {
    const { emailM, email, departamento, telefono, proyecto } = req.body;

    esquemaUsuario.findOne({ emailM })
    .then((usuarios) => res.json(usuarios))
    .catch((error) => res.json(error));

});
module.exports = router;
