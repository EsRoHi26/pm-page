import Link from 'next/link'
import React from 'react'
import { Usuarios } from '../interfaces/users.interface';

const proyectos = [
    { id: 1, title: "Card 1", content: "Content for Card 1." },
    { id: 2, title: "Card 2", content: "Content for Card 2." },
    { id: 3, title: "Card 3", content: "Content for Card 3." },
    { id: 4, title: "Card 4", content: "Content for Card 4." },
    { id: 5, title: "Card 5", content: "Content for Card 5." }
]

const ProyectCard = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data: Usuarios[] = await res.json();

    return (
        <div className="flex flex-wrap">
            {data.map(user => (
                <Link className="p-4 md:w-1/4 lg:w-2/6 xl:w-1/8 flex-shrink-0" href={{
                    pathname: '/proyecto',
                    query: { name: user.name } // the data
                }}>
                    <div
                        key={user.id}
                        className=""
                    >
                        <div className="bg-white shadow-xl p-4 rounded-md  group border-indigo-500 hover:bg-gray-700 hover:shadow-lg hover:border-transparent">
                            <h2 className="text-xl font-semibold text-black group-hover:text-gray-200">{user.name}</h2>
                            <p className='text-black group-hover:text-gray-200'>{user.phone}</p>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    )
}

export default ProyectCard
