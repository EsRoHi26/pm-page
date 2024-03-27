import Link from 'next/link'
import React from 'react'

const proyectos = [
    { id: 1, title: "Card 1", content: "Content for Card 1." },
    { id: 2, title: "Card 2", content: "Content for Card 2." },
    { id: 3, title: "Card 3", content: "Content for Card 3." },
    { id: 4, title: "Card 4", content: "Content for Card 4." },
    { id: 5, title: "Card 5", content: "Content for Card 5." }
]

const ProyectCard = () => {
    return (
        <div className="flex flex-wrap">
            {proyectos.map(({ id, title, content }) => (
                <Link className="p-4 md:w-1/4 lg:w-2/6 xl:w-1/8 flex-shrink-0" href={{
                    pathname: '/proyecto',
                    query: { name: title } // the data
                }}>
                    <div
                        key={id}
                        className=""
                    >
                        <div className="bg-white shadow-md p-4 rounded-md">
                            <h2 className="text-xl font-semibold">{title}</h2>
                            <p>{content}</p>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    )
}

export default ProyectCard
