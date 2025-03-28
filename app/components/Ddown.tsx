'use client'
import React from 'react'
import BackBtn from './BackBtn'
import { Participante, Proyectos } from '../interfaces/project.interface'



const DDown = async (id: { pId: string, estado: string }) => {
    const s: string = id.pId;
    console.log(id.pId);

    const users = await fetch('https://pm-app-tmfg.onrender.com/api/usuarios', { method: 'GET' })
        .then(response => response.json())
        .then(async (data) => { const temp: Participante[] = data; 
            const temp2 = await fetch('https://pm-app-tmfg.onrender.com/api/proyectos/' + s, { method: 'GET' })
                .then(response => response.json())
                .then((data:Proyectos) => {
                    let temporal: Participante[] = [];
                    data.correoColaboradores.map((correo: string) => {
                        temp.map((user: Participante) => {
                            if (user.email === correo) {
                                temporal.push(user);
                            }
                        });
                    });
            return temporal; })
        return temp2; })

    interface Job {
        nombre: string,
        descripcion: string,
        correoEncargado: string,
        puntos: number,
        estado: string,
        [key: string]: string | number // Add index signature
    }

    let job: Job = {
        nombre: "",
        descripcion: "",
        correoEncargado: "",
        puntos: 0,
        estado: id.estado
    }

    const handleInputChange = (event: any) => {
        const temp: { name: string, value: string | number } = event.target;
        const campo: string = temp.name;
        job[campo] = temp.value;
    }

    function handleForm() {
        fetch('https://pm-app-tmfg.onrender.com/api/proyectos/' + s + '/tareas', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(job)
        }).then(response => response.json())
            .then(data => {
                console.log(data);
                alert("Tarea creada con exito");
            })
            .catch((error) => {
                console.error('Error:', error);
                alert("Error al crear la tarea");
            });
    }
    console.log(job);
    return (
        <div>
            <form onSubmit={handleForm} className='card bg-gray-400 bg-opacity-50 px-8 py-6 mx-52 mt-11 shadow-xl'>
                <h1 className='text-xl font-bold'>Nueva Tarea</h1>
                <hr />
                <h5 className='mx-2 mt-2'>Nombre</h5>
                <input type="text" name='nombre' placeholder="Type here" onChange={handleInputChange} className="input input-bordered mt-2 bg-white mb-1 required" />
                <h5 className='mx-2 mt-2'>Encargado</h5>
                <select name="correoEncargado" onChange={handleInputChange} defaultValue={""} className="select select-bordered mt-2 bg-white mb-1">
                    <option value="" disabled>Selecciona un usuario</option>
                    {users.map(user => (
                        <option key={user._id} value={user.email}>{user.name}</option>
                    ))}
                </select>
                <h5 className='mx-2 mt-2'>Story Points</h5>
                <input type="text" name='puntos' placeholder="Type here" onChange={handleInputChange} className="input input-bordered mt-2 bg-white mb-1 required" />
                <h5 className='mx-2 mt-2'>Description</h5>
                <textarea placeholder="Type here" name='descripcion' onChange={handleInputChange} className="textarea textarea-bordered mt-2 bg-white mb-1" />
                <div className='flex'>
                    <div className='flex-1'>
                        <button type="button" className="btn btn-defult mt-8 mr-80 shadow-lg" onClick={handleForm}>Crear</button>
                    </div>
                    <div className="flex btn btn-defult mt-8 ml-44 shadow-lg">
                        <BackBtn />
                    </div>
                </div>
            </form>
        </div>
    )
}

export default DDown
