'use client'
import React from 'react'
import SideNav from '../components/SideNav'
import Link from 'next/link'
import { Proyectos } from '../interfaces/users.interface'
import { Usuario2 } from '../interfaces/project.interface'


const DdownPM = async() => {
    let usuario =""
    let idProyecto = "";
    let proyectoUsuario = ""
    const proyectos = await fetch('http://localhost:9000/api/proyectos')
        .then(response => response.json())
        .then(data => { let temp: Proyectos[] = data; return temp })

    //console.log(proyectos);

    
    interface Job {
        emailM: string,
        email: string,
        departamento: string,
        telefono: number,
        proyecto: string
        [key: string]: string | number // Add index signature
    }

    let job: Job = {
        emailM: "",
        email: "",
        departamento: "",
        telefono: 0,
        proyecto: ""
    }

    function handleInputChange(event: any) {
        event.preventDefault();
        if (event.target.name === "proyecto") {
            job[event.target.name]  = event.target.value.replace(/['"]+/g, '');
            console.log(job[event.target.value]);
            idProyecto = JSON.stringify(job[event.target.name])
            idProyecto= idProyecto.replace(/['"]+/g, '');
            
        } else {
            job[event.target.name] = event.target.value;
        }
        const temp: { name: string, value: string | number } = event.target;
        const campo: string = temp.name;
        job[campo] = temp.value;
        
    }

    

    function handleForm() {
        console.log(job.emailM);
        //se actualiza el usuario
        fetch('http://localhost:9000/api/usuariosM', {
            method: 'PUT',
            body: JSON.stringify(job),
            headers: {
                'Content-Type': 'application/json'
            },
            

        }).then(response => response.json())
            .then(data => {
                console.log(data);
                console.log(job);
                
                usuario=JSON.stringify(job)
                
                console.log('Usuario actualizado con exito')
                alert("Usuario actualizado con exito")
            })
            .catch((error) => {
                console.error('Error:', error);
            });
        
        

                    //se agrega el usuario a la lista de colaboradores del proyecto seleccionado
                    fetch('http://localhost:9000/api/agregarusuarioP', {
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
            
    

    

    
    

return (
    
        <div className="flex-1 px-4 pt-2 text-black bg-green-100">
            <div className='card bg-gray-400 bg-opacity-50 px-5 py-10 mx-52 mt-11 shadow-xl'>
                <h1 className='text-xl font-bold'>Modificar Usuario</h1>
            <form onSubmit={handleForm} className="mt-5 space-y-4 border-2 border-black p-3  inline-block ml-44 mr-44 rounded">

            <li style={{ listStyleType: 'none' }}><label htmlFor="emailM">Correo del usuario a modificar: </label>
                <input type="text" className="bg-white rounded" id="emailM" 
                name="emailM" onChange={handleInputChange}  required/></li>

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
                        <label>Cambiar Estado: </label>                            
                        <select name="proyecto" onChange={handleInputChange} defaultValue={""} className="select select-bordered mt-2 bg-white mb-1">
                                <option value="" disabled>Selecciona un proyecto</option>
                                {proyectos.map(proyecto => (
                                    <option key={proyecto.nombre} value={JSON.stringify(proyecto._id)}>{proyecto.nombre}</option>
                                ))}
                            </select>
                        
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