'use client'
import React from 'react'
import { useRouter } from 'next/navigation'

const BackBtn = () => {
    const router = useRouter()
    return (
        <div className='flex'>
            <button type="button" onClick={() => router.back()}>
                Back
            </button>
        </div>
    )
}

export default BackBtn
