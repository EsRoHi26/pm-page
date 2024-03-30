import Link from 'next/link'
import React from 'react'
import { Proyectos, Tarea } from '../interfaces/project.interface'
import KbnBtn from './KbnBtn';
import { useRouter } from 'next/navigation';


const Kanban = async (id: { id: string }) => {
    const test: string = id.id;
    let todo: Tarea[] = [];
    let prog: Tarea[] = [];
    let done: Tarea[] = [];

    await fetch('http://localhost:9000/api/proyectos/' + test, { method: 'GET', next: { revalidate: 5 } })
        .then(response => response.json())
        .then((data: Proyectos) => {
            let tareas: Tarea[] = data.tareas;
            tareas.map((tarea: Tarea) => {
                if (tarea.estado === 'Pendiente') {
                    todo.push(tarea);
                } else if (tarea.estado === 'En curso') {
                    prog.push(tarea);
                } else if (tarea.estado === 'Finalizada') {
                    done.push(tarea);
                }
            });
        })
        .catch((error) => {
            console.error('Error:', error);
        });

    return (
        <div className='flex space-x-3 p-5 '>
            <div className='flex-1 bg-gray-300 shadow-md p-4 rounded-md bg-opacity-40 overflow-auto h-72'>
                <div className='flex text-white'>
                    <div className='flex-1'>
                        <h1>Todo</h1>
                    </div>
                    <div className='flex'>
                        <div className='rounded bg-gray-400 bg-opacity-0 px-2 text-center shadow-md hover:shadow-none hover:bg-opacity-60'>
                            <Link href={{
                                pathname: '/new-task',
                                query: { pID: test, estado:"Pendiente" } // the data
                            }}>+</Link>
                        </div>
                    </div>
                </div>
                {todo.map((job) => (
                    <div key={job._id}>
                        <div className="bg-white shadow-md p-4 my-1 rounded-md">
                            <div className='flex'>
                                <div className='flex-1'>
                                    <h1>{job.nombre}</h1>
                                </div>
                                <div className='mb-3'>
                                    <KbnBtn id={job._id} estado={'En curso'} prjID={test} />
                                </div>
                            </div>
                            <div className='flex'>
                                <div className='flex-1'>
                                    <p>P: {job.puntos}</p>
                                </div>
                                <div>
                                    <p>{job.correoEncargado}</p>
                                </div>
                            </div>
                            <div>
                                <p>{job.descripcion}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className='flex-1 bg-gray-300 shadow-md p-4 rounded-md bg-opacity-40 overflow-auto h-72'>
                <div className='flex text-white'>
                    <div className='flex-1'>
                        <h1>In Progress</h1>
                    </div>
                    <div className='flex'>
                        <div className='rounded bg-gray-400 bg-opacity-0 px-2 text-center text-white shadow-md hover:shadow-none hover:bg-opacity-60 '>
                        <Link href={{
                                pathname: '/new-task',
                                query: { pID: test, estado:"En curso" } // the data
                            }}>+</Link>
                        </div>
                    </div>
                </div>
                {prog.map((job) => (
                    <div key={job._id}>
                        <div className="bg-white shadow-md p-4 my-1 rounded-md">
                            <div className='flex'>
                                <div className='flex-1'>
                                    <h1>{job.nombre}</h1>
                                </div>
                                <div className='mx-2 mb-3'>
                                    <KbnBtn id={job._id} estado={'Pendiente'} prjID={test} />
                                </div>
                                <div className='mb-3'>
                                    <KbnBtn id={job._id} estado={'Finalizada'} prjID={test} />
                                </div>
                            </div>
                            <div className='flex'>
                                <div className='flex-1'>
                                    <p>P: {job.puntos}</p>
                                </div>
                                <div>
                                    <p>{job.correoEncargado}</p>
                                </div>
                            </div>
                            <div>
                                <p>{job.descripcion}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className='flex-1 bg-gray-300 shadow-md p-4 rounded-md bg-opacity-40 overflow-auto h-72'>
                <div className='flex text-white'>
                    <div className='flex-1'>
                        <h1>Done</h1>
                    </div>
                    <div className='flex'>
                        <div className='rounded bg-gray-400 bg-opacity-0 px-2 text-center text-white shadow-md hover:shadow-none hover:bg-opacity-60'>
                        <Link href={{
                                pathname: '/new-task',
                                query: { pID: test, estado:"Finalizada" } // the data
                            }}>+</Link>
                        </div>
                    </div>
                </div>
                {done.map((job) => (
                    <div key={job._id}>
                        <div className="bg-white shadow-md p-4 my-1 rounded-md">
                            <div className='flex'>
                                <div className='flex-1 mb-3'>
                                    <KbnBtn id={job._id} estado={'En curso'} prjID={test} />
                                </div>
                                <div>
                                    <h1>{job.nombre}</h1>
                                </div>
                            </div>
                            <div className='flex'>
                                <div className='flex-1'>
                                    <p>P: {job.puntos}</p>
                                </div>
                                <div>
                                    <p>{job.correoEncargado}</p>
                                </div>
                            </div>
                            <div>
                                <p>{job.descripcion}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div >
    )
}

export default Kanban
