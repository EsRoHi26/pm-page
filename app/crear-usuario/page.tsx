import React from 'react'
import SideNav from '../components/SideNav'
import Link from 'next/link'
import DdownP from '../components/DdownP'

const page = () => {

    return (
        <div className="flex h-screen bg-white">
            <div className="w-40 bg-gray-800 text-white xs:w-1/6">
            <h1 className="text-2xl font-bold p-5">VISION</h1>
            <div className=' bg-gray-600 px-5'>
                <Link href={''}>
                    <ul className="mt-5 space-y-2">
                        <li>Login</li>
                    </ul>
                </Link>
            </div>
        </div>
            <DdownP/>
        </div>
    )
}

export default page
