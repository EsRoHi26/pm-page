"use client";
import Link from 'next/link';
import React from 'react'
import SideNav from '../components/SideNav';
import ProyectCard from '../components/ProyectCard';

const principal = () => {
  return (
    <div className="flex h-screen bg-white">
      <SideNav />
      <div className="flex-1 px-4 pt-2">
        <div className='flex h-screen'>
          <div className="flex-2 mb-8 w-64 bg-slate-400">
            <div className='mt-5 p-5'>
              <h1>Opciones</h1>
              <hr />
              <ul className="mt-5 space-y-2">
                <li><Link href={'/nuevo-proyecto'}>Nuevo Projecto</Link></li>
                <li><Link href={'/informe-general'}>Informe general</Link></li>
                <li><Link href={'/foro'}>Foro General</Link></li>
                <li><Link href={'/nueva-reunion'}>Crear reuniones</Link></li>
                <li><Link href={'/modificar-usuario'}>Modificar usuario</Link></li>
              </ul>
            </div>
          </div>
          <div className='flex-1 mb-8 ml-2 bg-white text-black'>
            <div className='mt-5 p-5'>
              <h1>Proyectos</h1>
              <hr className='h-1 bg-black' />
              <ProyectCard/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default principal
