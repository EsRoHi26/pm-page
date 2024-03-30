import React from 'react'
import SideNav from '../components/SideNav'
import DDown from '../components/Ddown'

const page = ({ searchParams }: {
    searchParams: {
        pId: string
      }
}) => {
    interface temp{
        pID: string,
        estado: string
    }
    const test= JSON.stringify(searchParams);
    const test2:temp  = JSON.parse(test);
    return (
        <div className="flex h-screen bg-white">
            <SideNav />
            <div className="flex-1 px-4 pt-2 text-black bg-green-100 overflow-auto">
                <DDown pId={test2.pID} estado={test2.estado}/>
            </div >
        </div>
    )
}

export default page
