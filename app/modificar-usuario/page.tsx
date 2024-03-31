import React from 'react'
import SideNav from '../components/SideNav'
import Link from 'next/link'
import DdownPM from '../components/DdownPM'

const page = () => {
    
    return (
        <div className="flex h-screen bg-white">
            <SideNav />
            <DdownPM />
        </div>
    )
}

export default page
