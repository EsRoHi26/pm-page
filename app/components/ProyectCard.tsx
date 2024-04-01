import Link from 'next/link'
import React from 'react'
import { Usuarios } from '../interfaces/users.interface';
import { Proyectos } from '../interfaces/project.interface';
import { json } from 'node:stream/consumers';

const proyectos = [
    { id: 1, title: "Card 1", content: "Content for Card 1." },
    { id: 2, title: "Card 2", content: "Content for Card 2." },
    { id: 3, title: "Card 3", content: "Content for Card 3." },
    { id: 4, title: "Card 4", content: "Content for Card 4." },
    { id: 5, title: "Card 5", content: "Content for Card 5." }
]

const ProyectCard = async () => {
    const projects = await fetch('https://pm-app-tmfg.onrender.com/api/proyectos', { method: 'GET', cache: 'no-cache' });
    const prj: Proyectos[] = await projects.json();

    return (
        <div className="flex flex-wrap">
            {prj.map(user => (
                <div
                    key={user._id}
                    className="p-4 md:w-1/4 lg:w-2/6 xl:w-1/8 flex-shrink-0"
                >
                    <Link className="" href={{
                        pathname: '/proyecto',
                        query: { name: user.nombre, id: user._id } // the data
                    }}>
                        <div className="bg-white shadow-xl p-4 rounded-md  group border-indigo-500 hover:bg-gray-700 hover:shadow-lg hover:border-transparent">
                            <h2 className="text-xl font-semibold text-black group-hover:text-gray-200">{user.nombre}</h2>
                            <p className='text-black group-hover:text-gray-200'>{user.descripcion}</p>
                        </div>
                    </Link>
                </div>
            ))}
        </div>
    )
}

export default ProyectCard
