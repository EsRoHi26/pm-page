'use client'
import React from 'react'
import SideNav from '../components/SideNav'
import { useState } from 'react'
import { Usuarios } from '../interfaces/users.interface';


export async function Crear(valores: any) {
    //const valoresJSON = JSON.stringify(valores);
    //console.log(valoresJSON);

    fetch("http://localhost:9000/api/proyectos", {
        method: 'POST',
        body: JSON.stringify(valores),
        headers: {
            'Content-Type': 'application/json'
        }

    })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            alert("Proyecto creado con exito")
            window.location.reload()
        })
        .catch(error => console.error('Error:', error))


}


const page = () => {
    const hoy = new Date(Date.now()).toISOString().split('T')[0];
    const [valores, setValores] = useState(
        {
            nombre: '',
            recursosN: '',
            presupuesto: 0,
            correoColaboradores: '',
            estado: 'Pendiente',
            descripcion: '',
            fechaInicio: hoy,
            fechaFin: '',
            historialCambios: [],
            correoResponsable: '',
            tareas: []

        }
    );

    const Form = () => {
        const [valores, setValores] = useState({
            nombre: '',
            recursos: '',
            presupuesto: '',
            colaboradores: ''
        });
    };

    const handleForm = (event: any) => {
        event.preventDefault();
        console.log(valores);


        Crear(valores);
    };

    const handleInputChange = (event: any) => {
        const { name, value } = event.target;
        setValores({
            ...valores,
            [name]: value,
        });
    }


    return (
        <div className="flex h-screen bg-white">
            <SideNav />
            <div className="flex-1 px-4 pt-2 text-black bg-green-100">
                <div className='card bg-gray-400 bg-opacity-50 px-10 py-8 mx-52 pt-5 shadow-xl'>
                    <h1 className='text-xl font-bold'>Nuevo Proyecto</h1>
                    <hr />
                    <form onSubmit={handleForm} className='card bg-gray-400 bg-opacity-50 px-10 py-8 mt-2 shadow-xl'>

                        <h5 className='mx-2 mt-2'>Nombre del Proyecto</h5>
                        <input type="text" placeholder="Type here" className="input input-bordered mt-2 bg-white mb-1"
                            name="nombre" value={valores.nombre} onChange={handleInputChange} required />
                        <h5 className='mx-2 mt-2'>Recursos</h5>
                        <input type="text" placeholder="Type here" className="input input-bordered mt-2 bg-white mb-1"
                            name="recursosN" value={valores.recursosN} onChange={handleInputChange} required />
                        <h5 className='mx-2 mt-2'>Presupuesto</h5>
                        <input type="text" placeholder="Type here" className="input input-bordered mt-2 bg-white mb-1"
                            name="presupuesto" value={valores.presupuesto} onChange={handleInputChange} required />
                        <h5 className='mx-2 mt-2'>Colaboradores</h5>
                        <input type="text" placeholder="Type here" className="input input-bordered mt-2 bg-white mb-1"
                            name="correoColaboradores" value={valores.correoColaboradores} onChange={handleInputChange} required />
                        <button type="submit" className="btn btn-defult mt-8 mr-80 shadow-lg">Crear</button>

                    </form>
                </div>
            </div >
        </div>
    )
}


export default page
