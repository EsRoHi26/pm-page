import React from 'react'
import SideNav from '../components/SideNav'
import Link from 'next/link'

const page = () => {
    return (
        <div className="flex h-screen bg-white">
            <SideNav />
            <div className="flex-1 px-4 pt-2 text-black">
            <h1 className="text-2xl font-bold p-4">Modificar Usuario</h1>
                <div className="justify-center">
                <form className="mt-5 space-y-2 border-2 border-black p-10  inline-block ml-16">

                    <li style={{ listStyleType: 'none' }}><label htmlFor="id">Cédula: </label>
                    <input type="text" className="rounded" id="id" required /></li>

                    <li style={{ listStyleType: 'none' }}><label htmlFor="email">Cambiar Email: </label>
                    <input type="email" className="rounded" id="email" /></li>

                    <li style={{ listStyleType: 'none' }}><label htmlFor="department">Cambiar Departmento: </label>
                    <input type="text" className="rounded" id="department" /></li>

                    <li style={{ listStyleType: 'none' }}><label htmlFor="phone">Cambiar Teléfono: </label>
                    <input type="tel" className="rounded" id="phone"  /></li>

                    <div>
                        <li style={{ listStyleType: 'none' }}>
                        <div className="flex justify-between">
                            <label>Cambiar Estado: </label>                            
                            <button type="button" className="bg-slate-400 text-black rounded">Libre</button>
                            <button type="button" className="bg-slate-400 text-black rounded">Asignar A Proyecto</button>
                            </div>
                        </li>
                    </div>
                    <div className="flex justify-between">
                        <button type="button" className="bg-gray-800 text-white rounded"><Link href={'/principal'}>Cancelar</Link></button>
                        <button type="submit" className="bg-gray-800 text-white rounded">Guardar</button>
                    </div>
                </form>
                </div>
            </div >
        </div>
    )
}

export default page
