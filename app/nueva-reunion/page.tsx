import React from 'react'
import SideNav from '../components/SideNav'
import Link from 'next/link'

const page = () => {
    return (
        <div className="flex h-screen bg-white">
            <SideNav />
            <div className="flex-1 px-4 pt-2 text-black bg-green-100">
                <div className='card bg-gray-400 bg-opacity-50 px-10 py-5 mx-24 shadow-xl'>
                    <h1 className='text-xl font-bold'>Crear Nueva Reunión</h1>
                    <form className="mt-5 space-y-4 border-2 border-black p-3 inline-block ml-44 mr-44 rounded text-gray-400">
                        <input type="text" name="title" placeholder="Título" className="w-full input input-bordered mt-2 bg-white mb-1" />
                        <textarea name="description" placeholder="Tema" className="w-full input input-bordered mt-2 bg-white mb-1"></textarea>
                        <input type="date" name="date" className="w-full input input-bordered mt-2 bg-gray-200 mb-1" />
                        <input type="time" name="time" className="w-full input input-bordered mt-2 bg-gray-200 mb-1" />
                        <input type="text" name="people" placeholder="Invitados" className="w-full input input-bordered mt-2 bg-white mb-1" />
                        <input type="text" name="location" placeholder="Medio De La Reunión" className="w-full input input-bordered mt-2 bg-white mb-1" />
                        <div className="flex justify-between space-x-2">
                            <button type="reset" className="btn btn-defult mt-8 mr-80 shadow-lg"><Link href={'/principal'}>Cancelar</Link></button>
                            <button type="submit" className="btn btn-defult mt-8 mr-80 shadow-lg">Guardar</button>
                        </div>
                    </form>
                </div >
            </div>
        </div>
    )
}

export default page
