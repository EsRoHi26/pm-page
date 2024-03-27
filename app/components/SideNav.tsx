import Link from 'next/link'
import React from 'react'

const SideNav = () => {
    return (
        <div className="w-40 bg-gray-800 text-white xs:w-1/6">
            <h1 className="text-2xl font-bold p-5">VISION</h1>
            <div className=' bg-gray-600 px-5'>
                <Link href={'/principal'}>
                    <ul className="mt-5 space-y-2">
                        <li>Home</li>
                    </ul>
                </Link>
            </div>
        </div>
    )
}

export default SideNav
