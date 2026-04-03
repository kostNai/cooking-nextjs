'use client'

import { useEffect } from 'react'

export default function Error({
    error,
    reset,
}: {
    error: Error
    reset: () => void
}) {
    useEffect(() => {
        console.error('Server error:', error)
    }, [error])

    return (
        <div className='w-full h-full flex flex-col justify-center items-center'>
            <h2 className='text-2xl font-bold'>
                Сталася помилка при завантаженні користувачів
            </h2>
            <p className='text-2xl font-medium'>{error.message}</p>
        </div>
    )
}
