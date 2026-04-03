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
        <div>
            <h2>Сталася помилка 😢</h2>
            <p>{error.message}</p>
            <button onClick={() => reset()}>Спробувати знову</button>
        </div>
    )
}
