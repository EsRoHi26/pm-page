import React from 'react'
import SideNav from '../components/SideNav'
import Link from 'next/link'

const page = () => {
    return (
        <div className="flex h-screen bg-white">
            <SideNav />
            <div className="flex-1 px-4 pt-2 text-black space-y-2 ">
            <h1 className="text-2xl font-bold p-4">Crear Usuario</h1>
                <div className="justify-center">
                <form className="mt-5 space-y-2 border-2 border-black p-10  inline-block ml-16">
                    <li style={{ listStyleType: 'none' }}><label htmlFor="name">Nombre: </label>
                    <input type="text" className="rounded" id="name" required /></li>

                    <li style={{ listStyleType: 'none' }}><label htmlFor="id">Cédula: </label>
                    <input type="text" className="rounded" id="id" required /></li>

                    <li style={{ listStyleType: 'none' }}><label htmlFor="email">Email: </label>
                    <input type="email" className="rounded" id="email" required /></li>

                    <li style={{ listStyleType: 'none' }}><label htmlFor="password">Password: </label>
                    <input type="password" className="rounded" id="password" required /></li>

                    <li style={{ listStyleType: 'none' }}><label htmlFor="department">Departmento: </label>
                    <input type="text" className="rounded" id="department" required /></li>

                    <li style={{ listStyleType: 'none' }}><label htmlFor="phone">Teléfono: </label>
                    <input type="tel" className="rounded" id="phone" required /></li>

                    <div>
                        <li style={{ listStyleType: 'none' }}>
                        <div className="flex justify-between">
                            <label>Estado: </label>                            
                            <button type="button" className="bg-slate-400 text-black rounded">Libre</button>
                            <button type="button" className="bg-slate-400 text-black rounded">Asignar A Proyecto</button>
                            </div>
                        </li>
                    </div>
                    <div className="flex justify-between">
                        <button type="button" className="bg-gray-800 text-white rounded"><Link href={'/'}>Cancelar</Link></button>
                        <button type="submit" className="bg-gray-800 text-white rounded">Guardar</button>
                    </div>
                </form>
                </div>
            </div >
        </div>
    )
}

export default page
