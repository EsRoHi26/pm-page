import React from 'react'
import SideNav from '../components/SideNav'
import VulnChart from '../components/InfoGen'
import Link from 'next/link'

const page = () => {
    return (
        <div className="flex h-screen bg-white">
            <SideNav />
            <div className="flex-1 px-4 pt-2 text-black">
                <div className='m-8 pt-24 pb-12'>
                    <div className='pr-24'>
                        <VulnChart />
                    </div>
                </div>
                <div className='text-center'>
                    <Link className='rounded-md shadow-md bg-gray-400 p-2 hover:bg-gray-600' href={'/principal'}>Regesar</Link>
                </div>
            </div >
        </div>
    )
}

export default page
