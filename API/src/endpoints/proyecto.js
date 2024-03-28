const express = require('express');
const esquemaProyecto = require('../modelosDatos/proyecto');
const { ExplainVerbosity } = require('mongodb');
const moment = require('moment');
const router = express.Router(); 


//crear proyecto
router.post('/proyectos',(req,res)=>{

    const proyecto = new esquemaProyecto(req.body); // Create a new instance of the esquemaProyecto model

    proyecto.save()
    .then(()=> res.json(proyecto))
    .catch((error)=> res.json(error));


});

//obtener los proyectos
router.get('/proyectos', (req, res) => {
    esquemaProyecto.find()
    .then((proyectos) => res.json(proyectos))
    .catch((error) => res.json(error));
});

//obtener lista de los Id de los proyectos
router.get('/proyectosId', (req, res) => {
    let ids_proyec = [];
    
    esquemaProyecto.find()
        .select("id")
        .exec()
        .then((idsProyecto) => {
            for (let i=0; i<idsProyecto.length; i++){
                ids_proyec.push(idsProyecto[i].id);
            }
            res.json({Ids: ids_proyec});
        })
        .catch((error) => res.json(error));
});

//buscar proyecto por id
router.get('/proyectos/:id', (req, res) => {
    const { id } = req.params;

    esquemaProyecto.findById(id)
    .then((proyectos) => res.json(proyectos))
    .catch((error) => res.json(error));

});

//actualizar un proyecto
router.put('/proyectos/:id', (req, res) => {
    const { id } = req.params;

    const { email, departamento, telefono, proyecto } = req.body;

    esquemaUsuario.updateOne({_id: id}, { $set: {email, departamento, telefono, proyecto}})
        .then(()=>{res.json({mensaje: 'Usuario actualizado'})} )
        .catch((err)=> res.json(err));  
});

//eliminar un proyecto
router.delete('/proyectos/:id', (req, res) => {
    const { id } = req.params;

    esquemaProyecto.remove({_id: id})
    .then(()=>{res.json({mensaje: 'Proyecto eliminado'})} )
    .catch((err)=> res.json(err));  
});

// crear tarea en un proyecto
router.post('/proyectos/:id/tareas', (req, res) => {
    const { id } = req.params;

    const { nombre, descripcion, correoEncargado, puntos, estado } = req.body;

    esquemaProyecto.findById(id)
        .then((proyecto) => {
            if (!proyecto) {
                return res.status(404).json({ error: "Proyecto no encontrado" });
            }

            const nuevaTarea = {
                nombre,
                descripcion,
                correoEncargado,
                puntos,
                estado
            };

            proyecto.tareas = proyecto.tareas || []; 
            proyecto.tareas.push(nuevaTarea);

            proyecto.save()
                .then(() => res.json(proyecto))
                .catch((error) => res.json(error));
        })
        .catch((error) => res.json(error));
});


// obtener una tarea de un proyecto
router.get('/proyectos/:id/tareas/:idTarea', (req, res) => {
    const { id, idTarea } = req.params;

    esquemaProyecto.findById(id)
        .then((proyecto) => {
            if (!proyecto || !proyecto.tareas) {
                return res.status(404).json({ error: "Proyecto o tarea no encontrada" });
            }

            const tareaEncontrada = proyecto.tareas.find(tarea => tarea._id == idTarea);

            if (!tareaEncontrada) {
                return res.status(404).json({ error: "Tarea no encontrada" });
            }

            return res.json(tareaEncontrada);
        })
        .catch((error) => res.json(error));
});


// actualizar estado de una tarea en el proyecto
router.put('/proyectos/:id/tareasEstado/:idTarea', (req, res) => {
    let { estado } = req.body;
    const { id, idTarea } = req.params;

    
            esquemaProyecto.findById(id)
                .then((proyecto) => {
                    if (!proyecto) {
                        return res.status(404).json({ error: "Proyecto no encontrado" });
                    }

                    const tarea = proyecto.tareas.find(tarea => tarea._id == idTarea);

                    if (!tarea) {
                        return res.status(404).json({ error: "Tarea no encontrada" });
                    }

                    
                    if (estado) { tarea.estado = estado; }

                    proyecto.save()
                        .then(() => res.json(proyecto))
                        .catch((error) => res.json(error));
                })
                .catch((error) => res.json(error));
    
});


// actualizar encargado de una tarea en el proyecto
router.put('/proyectos/:id/tareasEncargado/:idTarea', (req, res) => {
    let { correoEncargado } = req.body;
    const { id, idTarea } = req.params;

    
            esquemaProyecto.findById(id)
                .then((proyecto) => {
                    if (!proyecto) {
                        return res.status(404).json({ error: "Proyecto no encontrado" });
                    }

                    const tarea = proyecto.tareas.find(tarea => tarea._id == idTarea);

                    if (!tarea) {
                        return res.status(404).json({ error: "Tarea no encontrada" });
                    }

                    if (correoEncargado) { tarea.correoEncargado = correoEncargado; }
                    

                    proyecto.save()
                        .then(() => res.json(proyecto))
                        .catch((error) => res.json(error));
                })
                .catch((error) => res.json(error));
        
});


// actualizar una tarea en el proyecto
router.put('/proyectos/:id/tareas/:idTarea', (req, res) => {
    let { nombre, descripcion, correoEncargado, puntos, estado } = req.body;
    const { id, idTarea } = req.params;

    
            esquemaProyecto.findById(id)
                .then((proyecto) => {
                    if (!proyecto) {
                        return res.status(404).json({ error: "Proyecto no encontrado" });
                    }

                    const tarea = proyecto.tareas.find(tarea => tarea._id == idTarea);

                    if (!tarea) {
                        return res.status(404).json({ error: "Tarea no encontrada" });
                    }

                    // Actualizamos los campos de la tarea que hemos recibido si están definidos
                    if (nombre) {   tarea.nombre = nombre; }
                    if (descripcion) { tarea.descripcion = descripcion; }
                    if (correoEncargado) { tarea.correoEncargado = correoEncargado; }
                    if (puntos !== undefined) { tarea.puntos = puntos; }
                    if (estado) { tarea.estado = estado; }

                    proyecto.save()
                        .then(() => res.json(proyecto))
                        .catch((error) => res.json(error));
                })
                .catch((error) => res.json(error));
    
});

// eliminar una tarea en el proyecto
router.get('/proyectos/:id/tareasD/:idTarea', (req, res) => {
    const { id, idTarea } = req.params;

    esquemaProyecto.findById(id)
        .then((proyecto) => {
            const i = proyecto.tareas.findIndex(tarea => tarea._id == idTarea);

            if (i === -1) {
                return res.status(404).json({ error: "Tarea no encontrada" });
            }

            proyecto.tareas.splice(i, 1);
            proyecto.save()
                .then(() => res.json(proyecto))
                .catch((error) => res.json(error));
        })
        .catch((error) => res.json(error));
});

// obtener todas las tareas de un proyecto
router.get("/proyectos/:id/tareas", (req, res) => {
    const { id } = req.params;

    esquemaProyecto.findById(id)
        .then((proyecto) => {
            if (!proyecto) {
                return res.status(404).json({ error: "Proyecto no encontrado" });
            }
            return res.json(proyecto.tareas);
        })
        .catch((error) => res.json(error));
}); 

router.get('/proyectos/:id/burndownC', (req, res) => {
    const { id } = req.params;

    esquemaProyecto.findById(id)
        .then((proyecto) => {
            if (!proyecto) {
                return res.status(404).json({ error: "Proyecto no encontrado" });
            }
            let listTareas = proyecto.tareas;

            let diasTrabajo = moment(proyecto.fechaFin).diff(moment(proyecto.fechaInicio),'days');
            if (diasTrabajo <= 1) {
                diasTrabajo=15
            }

            console.log(listTareas);
            console.log(diasTrabajo);
            // Ordenar por fecha de inicio y asignar el valor de días restantes a cada tarea
            listTareas.sort((a, b) => a.fechaInicio - b.fechaInicio);
            
            let puntos = 0; 
            for (const tarea of listTareas) {
                puntos+= tarea.puntos;
            };
            console.log(puntos);
            
            //definicion de listas de tareas por estado  y puntos completados
            let listTareasCompletadas = [];
            let listTareasEnCurso = [];
            let listTareasPendientes = [];
            let puntosCompletados = 0;
            let puntosPendientes = puntos;

            for (const tarea of listTareas) {
                if (tarea.estado === "Finalizada") {
                    listTareasCompletadas.push(tarea);
                    puntosCompletados += tarea.puntos;
                    puntosPendientes = puntos - puntosCompletados;
                }
                else if (tarea.estado === "En curso") {
                    listTareasEnCurso.push(tarea);
                }
                else{
                    listTareasPendientes.push(tarea);
                }
            };
            console.log(listTareasCompletadas);
            console.log(listTareasEnCurso);
            console.log(listTareasPendientes);

            const burndown = {
                ejeX: diasTrabajo,
                ejeY: puntos,
                tareasCompletadas: listTareasCompletadas,
                tareasEnCurso: listTareasEnCurso,
                tareasPendientes: listTareasPendientes,
                puntosCompletados: puntosCompletados,
                puntosPendientes: puntosPendientes
            };
    
            return res.json(burndown);
            





        })
        .catch((error) => res.json(error));

});
module.exports = router;