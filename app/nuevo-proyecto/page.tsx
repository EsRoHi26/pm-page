import React from 'react'
import SideNav from '../components/SideNav'

const page = () => {
    return (
        <div className="flex h-screen bg-white">
            <SideNav />
            <div className="flex-1 px-4 pt-2 text-black bg-green-100">
                <div className='card bg-gray-400 bg-opacity-50 px-10 py-8 mx-52 mt-11 shadow-xl'>
                    <h1 className='text-xl font-bold'>Nuevo Proyecto</h1>
                    <hr />
                    <h5 className='mx-2 mt-2'>Nombre del Projecto</h5>
                    <input type="text" placeholder="Type here" className="input input-bordered mt-2 bg-white mb-1" />
                    <h5 className='mx-2 mt-2'>Recursos</h5>
                    <input type="text" placeholder="Type here" className="input input-bordered mt-2 bg-white mb-1" />
                    <h5 className='mx-2 mt-2'>Presupuesto</h5>
                    <input type="text" placeholder="Type here" className="input input-bordered mt-2 bg-white mb-1" />
                    <h5 className='mx-2 mt-2'>Colaboradores</h5>
                    <input type="text" placeholder="Type here" className="input input-bordered mt-2 bg-white mb-1" />
                    <button type="submit" className="btn btn-defult mt-8 mr-80 shadow-lg">Crear</button>
                </div>
            </div >
        </div>
    )
}

export default page
