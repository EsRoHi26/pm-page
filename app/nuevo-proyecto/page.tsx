'use client'
import React from 'react'
import SideNav from '../components/SideNav'
import { useState } from 'react'
import { Participante } from '../interfaces/project.interface';
import { Tarea } from '../interfaces/project.interface';
import { CLIENT_STATIC_FILES_RUNTIME_REACT_REFRESH } from 'next/dist/shared/lib/constants';
import { Crear } from '../functions/Functions';

const page = async () => {
    const usuar: Participante[] = await fetch('https://pm-app-tmfg.onrender.com/api/usuarios', { method: 'GET' })
        .then(response => response.json())
        .then(data => {
            let temp: Participante[] = data;
            return temp;
        });

    const hoy = new Date(Date.now()).toISOString().split('T')[0];
    const valores: Proyecto = (
        {
            nombre: '',
            recursosN: '',
            presupuesto: 0,
            correoColaboradores: [],
            estado: 'Pendiente',
            descripcion: '',
            fechaInicio: hoy,
            fechaFin: hoy,
            correoResponsable: '',
            tareas: []
        }
    );

    interface Proyecto {
        nombre: string;
        recursosN: string;
        presupuesto: number;
        correoColaboradores: string[];
        estado: string;
        descripcion: string;
        fechaInicio: string;
        correoResponsable: string;
        tareas: Tarea[];
        fechaFin: string;
        [key: string]: string | number | string[] | Tarea[] // Add index signature
    }

    const colAct: string[] = [];

    const handleForm = (event: any) => {
        event.preventDefault();
        console.log(valores);

        Crear(valores);
    };

    const handleInputChange = (event: any) => {
        const { name, value } = event.target;
        valores[name] = value;
    }

    const addColaborador = (event: any) => {
        const { name, value } = event.target;
        valores.correoColaboradores.push(value);
    }

    return (
        <div className="flex h-screen bg-white">
            <SideNav />
            <div className="flex-1 px-4 pt-2 text-black bg-green-100 overflow-auto">
                <div className='card bg-gray-400 bg-opacity-50 px-10 py-8 mx-52 pt-5 shadow-xl'>
                    <h1 className='text-xl font-bold'>Nuevo Proyecto</h1>
                    <hr />
                    <form onSubmit={handleForm} className='card bg-gray-400 bg-opacity-50 px-10 py-8 mt-2 shadow-xl'>
                        <h5 className='mx-2 mt-2'>Nombre del Proyecto</h5>
                        <input type="text" placeholder="Type here" className="input input-bordered mt-2 bg-white mb-1"
                            name="nombre" onChange={handleInputChange} required />
                        <h5 className='mx-2 mt-2'>Recursos</h5>
                        <input type="text" placeholder="Type here" className="input input-bordered mt-2 bg-white mb-1"
                            name="recursosN" onChange={handleInputChange} required />
                        <h5 className='mx-2 mt-2'>Presupuesto</h5>
                        <input type="text" placeholder="Type here" className="input input-bordered mt-2 bg-white mb-1"
                            name="presupuesto" onChange={handleInputChange} required />
                        <h5 className='mx-2 mt-2'>Colaboradores</h5>
                        <select onChange={addColaborador} defaultValue={""} className="select select-bordered mt-2 bg-white mb-1">
                            <option value="" disabled>Selecciona un usuario</option>
                            {usuar.map(user => (
                                <option key={user._id} value={user.email}>{user.name}</option>
                            ))}
                        </select>
                        <h5 className='mx-2 mt-2'>Descripcion</h5>
                        <textarea placeholder="Type here" onChange={handleInputChange} name='descripcion' className="input input-bordered mt-2 bg-white mb-1">

                        </textarea>
                        <button type="submit" className="btn btn-defult mt-8 mr-80 shadow-lg">Crear</button>

                    </form>
                </div>
            </div >
        </div>
    )
}


export default page
