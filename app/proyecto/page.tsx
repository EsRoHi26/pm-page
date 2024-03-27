import React from 'react'
import SideNav from '../components/SideNav'
import Kanban from "../components/Kanban";



export default function page({ searchParams }: {
  searchParams: {
    name: string,
    somethingElse: string,
  }
}) {
  return (
    <div className="flex h-screen bg-white">
      <SideNav />
      <div className="flex-1 px-4 pt-2 text-black">
        <h1>Proyecto {searchParams.name}</h1>
        <hr className='h-1 bg-black' />
        <div className='bg-gray-400 px-5 h-80'>
         <Kanban/>
        </div>
        <div className='bg-gray-500'>
          <div className='flex'>
            <div className='flex-1 bg-red-700 px-5'>Participantes</div>
            <div className='bg-red-300 px-5'> botones</div>
          </div>
        </div>
      </div >
    </div>
  )
}


