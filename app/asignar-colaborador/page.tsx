import Link from 'next/link';
import React from 'react'
import SideNav from '../components/SideNav';
import ProyectCard from '../components/ProyectCard';

const principal = () => {
  return (
    <div className="flex h-screen bg-white">
      <SideNav />
      <div className="flex-1 px-4 pt-2 text-black bg-green-100 p-4">
        <div className="px-10 ">            
            <div className='flex-1 mb-8 ml-2 bg-white text-black rounded '>      
            <h1 className='text-xl font-bold text-black p-4'>Asignar a Proyecto</h1>
                          
                <div className='mt-5 px-10 overflow-auto '>
                <h1>Proyectos</h1>
                <hr className='h-1 bg-black' />
                <ProyectCard />
                </div>
                <div className="py-8">
                    <form className='card bg-gray-400 bg-opacity-50 px-10 mx-52 mt-11 shadow-xl'>
                        <h5 className='mx-2 mt-2'>Nombre del Projecto:</h5>
                        <input type="text" className="input input-bordered mt-2 bg-white mb-1" name="nombre" required />
                        <div className="flex justify-center">
                            <button type="submit" className="btn btn-defult mt-8 shadow-lg">Guardar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default principal
