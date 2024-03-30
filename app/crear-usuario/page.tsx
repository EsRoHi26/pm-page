import React from 'react'
import SideNav from '../components/SideNav'
import Link from 'next/link'
import DdownP from '../components/DdownP'

const page = () => {


    return (
        <div className="flex h-screen bg-white">
            <SideNav />
            <DdownP/>
        </div>
    )
}

export default page
