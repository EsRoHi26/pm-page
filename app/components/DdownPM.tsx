'use client'
import React from 'react'
import SideNav from '../components/SideNav'
import Link from 'next/link'
import { Proyectos } from '../interfaces/users.interface'



const DdownPM = async() => {

    const proyectos = await fetch('http://localhost:9000/api/proyectos')
        .then(response => response.json())
        .then(data => { let temp: Proyectos[] = data; return temp })

    console.log(proyectos);


    interface Job {
        email: string,
        departamento: string,
        telefono: number,
        proyecto: string
        [key: string]: string | number // Add index signature
    }

    let job: Job = {
        email: "",
        departamento: "",
        telefono: 0,
        proyecto: ""
    }

    function handleInputChange(event: any) {
        const temp: { name: string, value: string | number } = event.target;
        const campo: string = temp.name;
        job[campo] = temp.value;
    }

    function handleForm() {
        fetch('http://localhost:9000/api/usuarios/:id', {
            method: 'PUT',
            body: JSON.stringify(job),
            headers: {
                'Content-Type': 'application/json'
            },
            

        }).then(response => response.json())
            .then(data => {
                console.log(data);
                console.log(job);
                console.log('Usuario creado con exito')
                alert("Usuario creado con exito")
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }

return (
    
        <div className="flex-1 px-4 pt-2 text-black bg-green-100">
            <div className='card bg-gray-400 bg-opacity-50 px-5 py-10 mx-52 mt-11 shadow-xl'>
                <h1 className='text-xl font-bold'>Modificar Usuario</h1>
            <form className="mt-5 space-y-4 border-2 border-black p-3  inline-block ml-44 mr-44 rounded">

                <li style={{ listStyleType: 'none' }}><label htmlFor="id">Cédula: </label>
                <input type="text" className="bg-white rounded" id="id" 
                name="cedula" onChange={handleInputChange} required /></li>

                <li style={{ listStyleType: 'none' }}><label htmlFor="email">Cambiar Email: </label>
                <input type="email" className="bg-white rounded" id="email" 
                name="email" onChange={handleInputChange} required/></li>

                <li style={{ listStyleType: 'none' }}><label htmlFor="department">Cambiar Departmento: </label>
                <input type="text" className="bg-white rounded" id="department" 
                name="departamento" onChange={handleInputChange} required/></li>

                <li style={{ listStyleType: 'none' }}><label htmlFor="phone">Cambiar Teléfono: </label>
                <input type="tel" className="bg-white rounded" id="phone"  
                name="telefono" onChange={handleInputChange} required/></li>

                <div>
                    <li style={{ listStyleType: 'none' }}>
                    <div className="flex justify-between">
                        <label>Cambiar Estado: </label>                            
                        <button type="button" className="bg-slate-400 text-black rounded">Libre</button>
                        <select name="proyecto" onChange={handleInputChange} defaultValue={""} className="select select-bordered mt-2 bg-white mb-1">
                                <option value="" disabled>Selecciona un proyecto</option>
                                {proyectos.map(proyecto => (
                                    <option key={proyecto.nombre} value={JSON.stringify(proyecto._id)}>{proyecto.nombre}</option>
                                ))}
                            </select>
                        </div>
                    </li>
                </div>
                <div className="flex justify-between">
                    <button type="reset" className="btn btn-defult mt-8  shadow-lg"><Link href={'/principal'}>Cancelar</Link></button>
                    <button type="submit" className="btn btn-defult mt-8  shadow-lg">Guardar</button>
                </div>
            </form>
            </div>
        </div >
    
)
}
export default DdownPM;