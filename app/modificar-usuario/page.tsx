import React from 'react'
import SideNav from '../components/SideNav'

const page = () => {
    return (
        <div className="flex h-screen bg-white">
            <SideNav />
            <div className="flex-1 px-4 pt-2 text-black">
                Modificar Usuario
            </div >
        </div>
    )
}

export default page
