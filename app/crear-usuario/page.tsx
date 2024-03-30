import React from 'react'
import SideNav from '../components/SideNav'
import Link from 'next/link'
import DdownP from '../components/DdownP'

const page = () => {


    return (
        <div className="flex h-screen bg-white">
            <SideNav />
            <div className="flex-1 px-4 pt-2 text-black bg-green-100">
                <div className='card bg-gray-400 bg-opacity-50 px-10 py-8 mx-52 mt-11 shadow-xl'>
                    <h1 className='text-xl font-bold'>Crear Usuario</h1>
                <form className="mt-5 space-y-4 border-2 border-black p-10  inline-block ml-44 mr-44 rounded">
                    <li style={{ listStyleType: 'none' }}><label htmlFor="name">Nombre: </label>
                    <input type="text" className="bg-white rounded" id="name" required /></li>

                    <li style={{ listStyleType: 'none' }}><label htmlFor="id">Cédula: </label>
                    <input type="text" className="bg-white rounded" id="id" required /></li>

                    <li style={{ listStyleType: 'none' }}><label htmlFor="email">Email: </label>
                    <input type="email" className="bg-white rounded" id="email" required /></li>

                    <li style={{ listStyleType: 'none' }}><label htmlFor="password">Password: </label>
                    <input type="password" className="bg-white rounded" id="password" required /></li>

                    <li style={{ listStyleType: 'none' }}><label htmlFor="department">Departmento: </label>
                    <input type="text" className="bg-white rounded" id="department" required /></li>

                    <li style={{ listStyleType: 'none' }}><label htmlFor="phone">Teléfono: </label>
                    <input type="tel" className="bg-white rounded" id="phone" required /></li>

                    <div>
                        <li style={{ listStyleType: 'none' }}>
                        <div className="flex justify-between">
                            <label>Estado: </label>                            
                            <button type="button" className="bg-slate-400 text-black rounded">Libre</button>
                            <button type="button" className="bg-slate-400 text-black rounded"><Link href={'/asignar-colaborador'}>Asignar A Proyecto</Link></button>
                            </div>
                        </li>
                    </div>
                    <div className="flex justify-between">
                    <button type="reset" className="btn btn-defult mt-8 shadow-lg"><Link href={'/'}>Cancelar</Link></button>
                        <button type="submit" className="btn btn-defult mt-8 shadow-lg">Guardar</button>
                    </div>
                </form>
                </div>
            </div >
        </div>
    )
}

export default page
