import React from 'react'
import SideNav from '../components/SideNav'
import BackBtn from '../components/BackBtn'

const page = () => {
    return (
        <div className="flex h-screen bg-white">
            <SideNav />
            <div className="flex-1 px-4 pt-2 text-black bg-green-100 overflow-auto">
                <div className='card bg-gray-400 bg-opacity-50 px-8 py-6 mx-52 mt-11 shadow-xl'>
                    <h1 className='text-xl font-bold'>Nueva Tarea</h1>
                    <hr />
                    <h5 className='mx-2 mt-2'>Nombre</h5>
                    <input type="text" placeholder="Type here" className="input input-bordered mt-2 bg-white mb-1" />
                    <h5 className='mx-2 mt-2'>Encargado</h5>
                    <input type="text" placeholder="Type here" className="input input-bordered mt-2 bg-white mb-1" />
                    <h5 className='mx-2 mt-2'>Story Points</h5>
                    <input type="text" placeholder="Type here" className="input input-bordered mt-2 bg-white mb-1" />
                    <h5 className='mx-2 mt-2'>Description</h5>
                    <textarea placeholder="Type here" className="textarea textarea-bordered mt-2 bg-white mb-1" />
                    <div className='flex'>
                        <div className='flex-1'>
                            <button type="submit" className="btn btn-defult mt-8 mr-80 shadow-lg">Crear</button>
                        </div>
                        <div className="btn btn-defult mt-8 ml-44 shadow-lg">
                            <BackBtn />
                        </div>
                    </div>
                </div>
            </div >
        </div>
    )
}

export default page
