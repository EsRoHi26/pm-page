'use client'
import React from 'react'
import SideNav from '../components/SideNav'
import Link from 'next/link'
import { Proyectos } from '../interfaces/project.interface'


const DdownP = async() => {

    let idProyecto = "";

    const proyectos = await fetch('https://pm-app-tmfg.onrender.com/api/proyectos')
        .then(response => response.json())
        .then(data => { let temp: Proyectos[] = data; return temp })
       // proyectos.push({nombre: "Ninguno", _id: ""})

    interface Job {
        name: string,
        cedula: number,
        email: string,
        contrasenna: string,
        departamento: string,
        telefono: number,
        proyecto: string
        [key: string]: string | number // Add index signature
    }

    let job: Job = {
        name: "",
        cedula: 0,
        email: "",
        contrasenna: "",
        departamento: "",
        telefono: 0,
        proyecto: ""
    }

    function handleInputChange (event: any) {
        event.preventDefault();
        if (event.target.name === "proyecto") {
            job[event.target.name]  = event.target.value.replace(/['"]+/g, '');
            console.log(job[event.target.value]);
            idProyecto = JSON.stringify(job[event.target.name])
            idProyecto= idProyecto.replace(/['"]+/g, '');
            
        } else {
            job[event.target.name] = event.target.value;
        }
        const temp:{ name:string, value:string|number } = event.target;
        const campo:string = temp.name;
        job[campo] = temp.value;
    }

    function handleForm() {
        // se crea el usuario
        fetch('https://pm-app-tmfg.onrender.com/api/usuarios', {
            method: 'POST',
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
        // revisa si se le asigno un proyecto al usuario
        if (idProyecto !== ""){

            

            // se agrega el usuario a la lista de colaboradores del proyecto seleccionado
            fetch('https://pm-app-tmfg.onrender.com/api/agregarusuarioP', {
                method: 'POST',
                body: JSON.stringify({idProyecto: idProyecto , email: job.email}),
                headers: {'Content-Type': 'application/json'}
            }).then(response => response.json())
            .then(data => {
                console.log(data);
                console.log(job);
                console.log('agregado a la lista de usuarios del proyecto')
                
            })
            .catch((error) => {
                console.error('Error:', error);
            });
        }    
    }
    //console.log(job);


    return (
            <div className="flex-1 px-4 pt-2 text-black bg-green-100">
                <div className='card bg-gray-400 bg-opacity-50 px-10 py-8 mx-52 mt-11 shadow-xl'>
                    <h1 className='text-xl font-bold'>Crear Usuario</h1>
                
                <form onSubmit={handleForm} className="mt-5 space-y-4 border-2 border-black p-10  inline-block ml-44 mr-44 rounded">
                    <li style={{ listStyleType: 'none' }}><label htmlFor="name">Nombre: </label>
                    <input type="text" className="bg-white rounded" id="name" 
                    name="name" onChange={handleInputChange} required /></li>

                    <li style={{ listStyleType: 'none' }}><label htmlFor="id">Cédula: </label>
                    <input type="text" className="bg-white rounded" id="id"
                    name="cedula" onChange={handleInputChange} required /></li>

                    <li style={{ listStyleType: 'none' }}><label htmlFor="email">Email: </label>
                    <input type="email" className="bg-white rounded" id="email" 
                    name="email" onChange={handleInputChange} required /></li>

                    <li style={{ listStyleType: 'none' }}><label htmlFor="password">Password: </label>
                    <input type="password" className="bg-white rounded" id="password"
                    name="contrasenna" onChange={handleInputChange} required /></li>

                    <li style={{ listStyleType: 'none' }}><label htmlFor="department">Departmento: </label>
                    <input type="text" className="bg-white rounded" id="department" 
                    name="departamento" onChange={handleInputChange} required /></li>

                    <li style={{ listStyleType: 'none' }}><label htmlFor="phone">Teléfono: </label>
                    <input type="tel" className="bg-white rounded" id="phone"
                    name="telefono" onChange={handleInputChange}  required /></li>

                    
                    <li style={{ listStyleType: 'none' }}>
                        
                            <label>Proyecto: </label>                            
                            <select name="proyecto" onChange={handleInputChange} defaultValue={""} className="select select-bordered mt-2 bg-white mb-1">
                                <option value="" disabled>Selecciona un proyecto</option>
                                {proyectos.map(proyecto => (
                                    <option key={proyecto.nombre} value={JSON.stringify(proyecto._id)}>{proyecto.nombre}</option>
                                ))}
                            </select>
                        
                    </li>
                    
                    <div className="flex justify-between">
                    <button type="reset" className="btn btn-defult mt-8 shadow-lg"><Link href={'/'}>Cancelar</Link></button>
                        <button type="submit" className="btn btn-defult mt-8 shadow-lg">Guardar</button>
                    </div>
                    
                </form>
                
                </div>
            </div >
        
    )


}

export default DdownP
