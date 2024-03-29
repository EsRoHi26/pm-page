import React from 'react'
import SideNav from '../components/SideNav'
import Kanban from "../components/Kanban";
import TablaPart from '../components/TablaPart';
import bg from '../assets/kanbanBg.avif';

export default function page({ searchParams }: {
  searchParams: {
    name: string,
    id: string,
  }
}) {
  return (
    <div className="flex h-screen bg-white">
      <SideNav />
      <div className="flex-1 px-4 pt-2 text-black overflow-auto">
        <h1>Proyecto {searchParams.name}</h1>
        <div className=''>
          <div className='card shadow-md h-80' style={{
            backgroundImage: `url(${bg.src})`,
            backgroundSize: '1200px 500px',
            width: '100%',
            height: '350px',
          }}>
            <Kanban id={searchParams.id} />
          </div>
        </div>
        <div className=''>
          <div className='flex'>
            <div className='flex-1 px-5 mt-5'>
              <h1 className='px-5 font-bold'>Participantes</h1>
              <TablaPart id={searchParams.id} />
            </div>
            <div className='flex-1 bg-red-300 px-5'> botones</div>
          </div>
        </div>
      </div >
    </div>
  )
}


